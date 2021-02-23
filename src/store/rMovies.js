import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../components/fakeMovieService";
import { v4 as uuidv4 } from "uuid";
import { act } from "react-dom/test-utils";

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
    movieAdded: (movies, action) => {
      movies.push({
        _id: uuidv4(),
        title: action.payload.title,
        genre: { _id: action.payload.genreId, name: action.payload.genreName },
        numberInStock: action.payload.numberInStock,
        dailyRentalRate: action.payload.dailyRentalRate,
        // publishDate: action.payload.publishDate,
      });
    },
    movieEdited: (movies, action) => {
      const index = movies.findIndex(
        (movie) => movie._id === action.payload._id
      );
      movies[index].title = action.payload.title;
      movies[index].genre._id = action.payload.genreId;
      movies[index].genre.name = action.payload.genreName;
      movies[index].numberInStock = action.payload.numberInStock;
      movies[index].dailyRentalRate = action.payload.dailyRentalRate;
    },
  },
});

export const { movieRemoved, movieAdded, movieEdited } = slice.actions;
export default slice.reducer;
