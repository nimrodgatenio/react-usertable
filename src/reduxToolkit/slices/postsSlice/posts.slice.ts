import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PostSliceType } from "../../../shared/types/posts.types";
import { getUserPosts } from "../../thunks/posts.thunks";

const initialState: PostSliceType = {
  selectedUserId: 0,
  selectedUserPosts: [],
  httpError: undefined,
};

export const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSelectedUserId(state, action: PayloadAction<number>) {
      state.selectedUserId = action.payload;
    },
    setSelectedUserPosts(state, action: PayloadAction<PostSliceType>) {
      state.selectedUserPosts = action.payload.selectedUserPosts;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getUserPosts.fulfilled, (state, action) => {
      state.selectedUserPosts = action.payload;
    });
    builder.addCase(getUserPosts.rejected, (state, action) => {
      state.httpError = action.payload;
    });
  },
});

export const { setSelectedUserId, setSelectedUserPosts } = PostsSlice.actions;

export const postsReducer = PostsSlice.reducer;
