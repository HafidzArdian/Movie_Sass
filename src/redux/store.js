import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";

// create Temporary db /state /store

export default configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV === "development",
});
