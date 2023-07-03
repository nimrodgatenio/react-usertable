import { combineReducers } from "@reduxjs/toolkit";
import { RootState } from "./root-state";
import { userReducer } from "../slices/usersSlice/users.slice";
import { postsReducer } from "../slices/postsSlice/posts.slice";

const RootReducer = combineReducers<RootState>({
  usersState: userReducer,
  postsState: postsReducer,
});
export default RootReducer;
