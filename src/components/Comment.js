import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, TextField } from "@mui/material";
import { addReply } from "../redux/actions";

function Comment({ comment }) {
  const dispatch = useDispatch();
  const [replyText, setReplyText] = useState("");
  const replies = useSelector((state) =>
    state.comments.filter((c) => c.parentId === comment.id)
  );

  const handleReply = () => {
    dispatch(addReply(comment.id, replyText));
    setReplyText("");
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <Card variant="outlined" style={{ padding: "10px" }}>
        <p>{comment.text}</p>
        <div>
          <TextField
            variant="outlined"
            size="small"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Add a reply..."
          />
          <Button
            onClick={handleReply}
            variant="contained"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            Reply
          </Button>
        </div>
      </Card>
      <div style={{ marginLeft: "20px" }}>
        {replies.map((reply) => (
          <Comment key={reply.id} comment={reply} />
        ))}
      </div>
    </div>
  );
}

export default Comment;
