import { configureStore } from "@reduxjs/toolkit";
import reducer from "../store/reducer";
const store = () => {
  return configureStore({ reducer });
};
export default store();
