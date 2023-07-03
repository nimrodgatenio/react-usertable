import React, { useEffect } from "react";
import { HomePageProps } from "../../shared/types/homepage.types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./components/PostList";
import useStyles from "./useStyles";
import UserTable from "./components/UsersTable/UserTable.component";
import { useAppDispatch, useAppSelector } from "../../reduxToolkit/store/hooks";
import Header from "./components/Header";
import { getUserPosts } from "../../reduxToolkit/thunks/posts.thunks";

function HomePage(props: HomePageProps): JSX.Element {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const selectedUserId = useAppSelector(
    (state) => state.rootReducer.postsState.selectedUserId
  );
  const selectedUserPosts = useAppSelector(
    (state) => state.rootReducer.postsState.selectedUserPosts
  );

  useEffect(() => {
    dispatch(getUserPosts(selectedUserId));
  }, [dispatch, selectedUserId]);

  return (
    <div className={classes.root}>
      <Header />
      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route
          path="/user/:userId/posts"
          element={<PostList posts={selectedUserPosts} />}
        />
      </Routes>
    </div>
  );
}

export default HomePage;
