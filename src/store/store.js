import { configureStore } from "@reduxjs/toolkit";
import { dogReducer } from "./dog.slice";

export const store = configureStore({
  reducer: {
    dog: dogReducer,
    // user: userReducer
  },
});
