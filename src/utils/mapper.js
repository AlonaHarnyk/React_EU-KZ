export const moviesMapper = array => {
  return array.map(
    ({ id, title, backdrop_path: image, vote_count: votes }) => ({
      id,
      title,
      image,
      votes,
      watched: false,
    })
  );
};

// export const moviesMapper = array => {
//   return array.map(({ id, title, backdrop_path: image, vote_count: votes }) => {
//     return {
//       id: id,
//       title: title,
//       image: image,
//       votes: votes,
//     };
//   });
// };
