import { Component } from 'react';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import Modal from 'components/Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Notification } from './Notification/Notification';

import { fetchMovies } from 'services/moviesApi';

import { GlobalStyles } from '../utils/GlobalStyles';
import { moviesMapper } from '../utils/mapper';

class App extends Component {
  state = {
    movies: [],
    currentImage: null,
    isShown: false,
    page: 1,
    isLoading: false,
    error: '',
  };

  componentDidUpdate(_, prevState) {
    const { isShown, page } = this.state;
    if ((isShown && isShown !== prevState.isShown) || (isShown && page !== prevState.page)) {
      this.getMovies();
    }
    if (!isShown && isShown !== prevState.isShown) {
      this.setState({ movies: [], page: 1 });
    }
  }

  getMovies = () => {
    const { page } = this.state;
    this.setState({ isLoading: true });
    fetchMovies(page)
      .then(({ data: { results } }) => {
        this.setState(prevState => ({
          movies: [...prevState.movies, ...moviesMapper(results)],
          error: ''
        }));
      })
      .catch(error => {
        this.setState({ error: error.message, isShown: false });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  deleteMovie = movieId => {
    this.setState(prevState => ({
      movies: prevState.movies.filter(({ id }) => id !== movieId),
    }));
  };

  openModal = data => {
    this.setState({ currentImage: data });
  };

  closeModal = () => {
    this.setState({ currentImage: null });
  };

  showMovies = () => {
    this.setState(prevState => ({
      isShown: !prevState.isShown,
    }));
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { movies, currentImage, isShown, isLoading, error } = this.state;

    return (
      <>
        <Button
          text={(isShown && !error) ? 'Hide movies' : 'Show movies'}
          clickHandler={this.showMovies}
        />
        {isShown && (
          <>
            <MoviesGallery
              movies={movies}
              deleteMovie={this.deleteMovie}
              openModal={this.openModal}
            />
            {!isLoading && !error && (
              <Button text="Load more" clickHandler={this.loadMore} />
            )}
          </>
        )}
        {isLoading && <Loader />}
        {error && <Notification text={error} />}
        {currentImage && (
          <Modal image={currentImage} closeModal={this.closeModal} />
        )}
        <GlobalStyles />
      </>
    );
  }
}

export default App;
