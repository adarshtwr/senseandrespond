import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import { addComment } from "../redux/actions";
import Comment from "../components/Comment";
import { Navigate } from "react-router-dom";

function Comments() {
  const comments = useSelector((state) => state.comments);
  const parentComments = comments.filter((c) => c.parentId === null);
  console.log("comments === ", comments);
  console.log("parentComments === ", parentComments);
  const auth = useSelector((state) => state.auth);
  const isLoggedIn = auth?.isAuthenticated;

  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    console.log("handleAddComment");
    dispatch(addComment(commentText));
    setCommentText("");
  };

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <div>
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment..."
        />
        <Button
          onClick={handleAddComment}
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
        >
          Add Comment
        </Button>
      </div>
      <div style={{ marginTop: "20px" }}>
        {parentComments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
