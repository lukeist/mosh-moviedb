import { createSlice } from "@reduxjs/toolkit";
import { genres } from "../components/fakeGenreService";

const slice = createSlice({
  name: "genres",
  initialState: genres,
  reducers: {
    // genreSelected
  },
});

// export const
export default slice.reducer;
