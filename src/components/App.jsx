import { useState, useEffect } from 'react';

import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import Modal from 'components/Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Notification } from './Notification/Notification';

import { fetchMovies } from 'services/moviesApi';

import { GlobalStyles } from '../utils/GlobalStyles';
import { moviesMapper } from '../utils/mapper';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [isShown, setIsShown] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isShown) {
      setIsLoading(true);
      fetchMovies(page)
        .then(({ data: { results } }) => {
          setMovies(prevMovies => [...prevMovies, ...moviesMapper(results)]);
          setError('');
        })
        .catch(error => {
          setError(error.message);
          setIsShown(false);
        })
        .finally(() => setIsLoading(false));
    }
  }, [isShown, page]);

  const deleteMovie = movieId => {
    setMovies(prevMovies => prevMovies.filter(({ id }) => id !== movieId));
  };

  const openModal = data => {
    setCurrentImage(data);
  };

  const closeModal = () => {
    setCurrentImage(null);
  };

  const showMovies = () => {
    setIsShown(prevIsShown => !prevIsShown);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Button
        text={isShown && !error ? 'Hide movies' : 'Show movies'}
        clickHandler={showMovies}
      />
      {isShown && (
        <>
          <MoviesGallery
            movies={movies}
            deleteMovie={deleteMovie}
            openModal={openModal}
          />
          {!isLoading && !error && (
            <Button text="Load more" clickHandler={loadMore} />
          )}
        </>
      )}
      {isLoading && <Loader />}
      {error && <Notification text={error} />}
      {currentImage && <Modal image={currentImage} closeModal={closeModal} />}
      <GlobalStyles />
    </>
  );
};

export default App;
