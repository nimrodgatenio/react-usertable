import React, { useCallback, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UserTableProps } from "../../../../shared/types/usersTable.types";
import useStyles from "./useStyles";
import { UserType } from "../../../../shared/types/user.types";
import { formatAddress } from "./userTable.functions";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  setSelectedUserId,
  setSelectedUserPosts,
} from "../../../../reduxToolkit/slices/postsSlice/posts.slice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { getUserPosts } from "../../../../reduxToolkit/thunks/posts.thunks";
import { useAppSelector } from "../../../../reduxToolkit/store/hooks";
import { getUsers } from "../../../../reduxToolkit/thunks/users.thunks";

function UserTable(): JSX.Element {
  const classes = useStyles();
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const navigate = useNavigate();

  const users = useAppSelector((state) => state.rootReducer.usersState.users);

  // fetching the users on init
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, users]);

  const handleUserClicked = useCallback(
    (user: UserType) => {
      dispatch(setSelectedUserId(user.id));
      dispatch(getUserPosts(user.id));
      navigate(`/user/${user.id}/posts`);
    },
    [dispatch, navigate]
  );

  return (
    <div className={classes.tableContainer}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user: UserType, index: number) => (
              <TableRow key={index}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className={classes.addressCell}>
                  {formatAddress(user.address || undefined)}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleUserClicked(user)}
                  >
                    View Posts
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserTable;
