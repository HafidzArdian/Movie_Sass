import auth from "./auth";
import { combineReducers } from "@reduxjs/toolkit";
import post from "./post";

export default combineReducers({
  post,
  auth,
});
