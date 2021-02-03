import { useState, useEffect } from "react";

const Pagination = ({
  moviesOnPages,
  filteredMovies,
  setFilteredMovies,
  genreStatus,
  moviesOnPagesGenre,
  setFilteredMoviesGenre,
}) => {
  return (
    <div>
      {genreStatus
        ? moviesOnPagesGenre.map((page) => (
            <button onClick={() => setFilteredMoviesGenre(page)}>
              {moviesOnPagesGenre.indexOf(page) + 1}
            </button>
          ))
        : moviesOnPages.map((page) => (
            <button onClick={() => setFilteredMovies(page)}>
              {moviesOnPages.indexOf(page) + 1}
            </button>
          ))}
    </div>
  );
};

export default Pagination;

// {

//   {moviesOnPagesGenre.map((page) =>
//     <button onClick={() => setFilteredMoviesGenre(page)}>
//       {moviesOnPagesGenre.indexOf(page) + 1}
//     </button>}
//     :
//   {moviesOnPages.map((page) => (
//     <span>
//       {moviesOnPages.length === 1 ? (
//         ""
//       ) : (
//         <button onClick={() => setFilteredMovies(page)}>
//           {moviesOnPages.indexOf(page) + 1}
//         </button>
//       )}
//     </span>
//   ))}}
