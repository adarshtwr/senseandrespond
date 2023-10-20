import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  TextField,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Paper,
  Grid,
  Pagination,
} from "@mui/material";
import { addComment, goToPage, logout } from "../redux/actions";
import Comment from "../components/Comment";
import { Navigate } from "react-router-dom";

function Comments() {
  const comments = useSelector((state) => state.comments);
  const currentPage = useSelector((state) => state.currentPage);
  const parentComments = comments.filter((c) => c.parentId === null);
  const auth = useSelector((state) => state.auth);
  const isLoggedIn = auth?.isAuthenticated;
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    dispatch(addComment(commentText));
    setCommentText("");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const onPageChange = (_, value) => {
    dispatch(goToPage(value));
  };

  const parentCommentsPerPage = 5;
  const totalPages = Math.ceil(parentComments.length / parentCommentsPerPage);

  const displayedParentComments = parentComments.slice(
    (currentPage - 1) * parentCommentsPerPage,
    currentPage * parentCommentsPerPage
  );

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Comments
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Paper elevation={3} style={{ padding: "20px", marginTop: "30px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Add a comment..."
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={handleAddComment}
                variant="contained"
                color="primary"
              >
                Add Comment
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Box mt={5}>
          {displayedParentComments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </Box>
        <Box mt={3} display="flex" justifyContent="center">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={onPageChange}
            color="primary"
          />
        </Box>
      </Container>
    </div>
  );
}

export default Comments;
