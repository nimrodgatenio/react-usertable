import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostType } from "../../shared/types/posts.types";
import postsAdapter from "../adapters/posts.adapter";

const getUserPosts = createAsyncThunk<
  PostType[],
  number,
  { rejectValue: Error }
>(
  "users",
  async (userId, { rejectWithValue, fulfillWithValue }): Promise<any> => {
    try {
      const response = await postsAdapter.getUserPosts(userId);
      const { data } = response;
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
const deleteUserPost = createAsyncThunk<
  any,
  { userId: number; postId: number },
  { rejectValue: Error }
>(
  "users/deleteUserPost",
  async ({ userId, postId }, { rejectWithValue }): Promise<any> => {
    try {
      const response = await postsAdapter.deleteUserPost(userId, postId);
      const { data } = response;
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export { getUserPosts, deleteUserPost };
