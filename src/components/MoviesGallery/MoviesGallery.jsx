export const MoviesGallery = ({
  movies,
  deleteMovie,
  openModal,
}) => {
  return (
    <ul>
      {movies.map(({ id, title, image, votes }) => {
        return (
          <li key={id}>
            <h2>{title}</h2>
            <p>Votes: {votes}</p>
            <button type="button" onClick={() => deleteMovie(id)}>
              Delete
            </button>
            <button
              type="button"
              onClick={() => openModal({ src: image, alt: title })}
            >
              Show poster
            </button>
          </li>
        );
      })}
    </ul>
  );
};
