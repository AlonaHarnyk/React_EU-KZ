import { Component } from 'react';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import Modal from 'components/Modal/Modal';

import { GlobalStyles } from '../utils/GlobalStyles';
import movies from '../data/movies.json';
import { moviesMapper } from '../utils/mapper';

class App extends Component {
  state = {
    movies: moviesMapper(movies),
    currentImage: null,
  };

  componentDidMount() {
    const savedMovies = localStorage.getItem('movies');
    if (savedMovies) {
      this.setState({ movies: JSON.parse(savedMovies) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { movies } = this.state;
    if (prevState.movies !== movies) {
      localStorage.setItem('movies', JSON.stringify(movies));
    }
  }

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

  toggleStatus = movieId => {
    this.setState(prevState => ({
      movies: prevState.movies.map(movie => {
        if (movie.id !== movieId) {
          return movie;
        } else {
          return { ...movie, watched: !movie.watched };
        }
      }),
    }));
  };

  render() {
    const { movies, currentImage } = this.state;

    return (
      <>
        <MoviesGallery
          movies={movies}
          deleteMovie={this.deleteMovie}
          openModal={this.openModal}
          toggleStatus={this.toggleStatus}
        />
        {currentImage && (
          <Modal image={currentImage} closeModal={this.closeModal} />
        )}
        <GlobalStyles />
      </>
    );
  }
}

export default App;
