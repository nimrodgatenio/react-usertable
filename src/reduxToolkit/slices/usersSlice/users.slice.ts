import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UsersSliceType } from "../../../shared/types/user.types";
import { getUsers } from "../../thunks/users.thunks";

const initialState: UsersSliceType = {
  users: [],
  httpError: undefined,
};

export const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<UsersSliceType>) {
      state.users = action.payload.users;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getUsers.fulfilled, (state, action) => {
      console.log(state.users);
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.httpError = action.payload;
    });
  },
});

export const { setUsers } = UserSlice.actions;

export const userReducer = UserSlice.reducer;
