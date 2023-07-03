/* eslint-disable no-empty-pattern */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "../../shared/types/user.types";
import usersAdapter from "../adapters/users.adapter";

export const getUsers = createAsyncThunk<any>(
  "users",
  async (
    _,
    { rejectWithValue, fulfillWithValue }
  ): Promise<UserType[] | any> => {
    try {
      const response = await usersAdapter.getUsers();
      const { data } = response;
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
