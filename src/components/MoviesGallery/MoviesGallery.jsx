export const MoviesGallery = ({
  movies,
  deleteMovie,
  openModal,
  toggleStatus,
}) => {
  return (
    <ul>
      {movies.map(({ id, title, image, votes, watched }) => {
        return (
          <li key={id}>
            <h2>{title}</h2>
            <p>Votes: {votes}</p>
            <p>
              Watched: <span onClick={() => toggleStatus(id)}>{watched + ''}</span>
            </p>
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
