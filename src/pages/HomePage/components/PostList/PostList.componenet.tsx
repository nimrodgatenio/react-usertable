import React, { useCallback } from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../reduxToolkit/store/hooks";
import { deleteUserPost } from "../../../../reduxToolkit/thunks/posts.thunks";
import { useStyles } from "./useStyles";
import { PostListPropsType } from "../../../../shared/types/postlist.types";

function PostList(props: PostListPropsType): JSX.Element {
  const { posts } = props;
  const dispatch = useAppDispatch();
  const classes = useStyles();

  // current selected user Id
  const userId = useAppSelector(
    (state) => state.rootReducer.postsState.selectedUserId
  );

  const handleDeletePost = useCallback(
    (postId: number) => {
      return dispatch(deleteUserPost({ userId, postId }));
    },
    [dispatch, userId]
  );

  return (
    <div className={classes.root}>
      {posts.map((post) => (
        <Card key={post.id} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography color="primary" variant="h5" component="div">
              {post.title}
            </Typography>
            <IconButton
              className={classes.deleteButton}
              onClick={() => handleDeletePost(post.id)}
            >
              <DeleteIcon color="secondary" />
            </IconButton>
          </CardContent>
          <CardContent>
            <Typography color="secondary" variant="body2">
              {post.body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default PostList;
