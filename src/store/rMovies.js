import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../components/fakeMovieService";

const slice = createSlice({
  name: "movies",
  initialState: getMovies(),
  reducers: {
    movieRemoved: (movies, action) => {
      const index = movies.findIndex(
        (movie) => movie._id === action.payload._id
      );
      movies.splice(index, 1);
    },
  },
});

export const { movieRemoved } = slice.actions;
export default slice.reducer;
