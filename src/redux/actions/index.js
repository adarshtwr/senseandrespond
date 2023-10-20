import constants from "../constants";

export const addComment = (text) => ({
  type: constants.ADD_COMMENT,
  payload: text,
});

export const addReply = (commentId, replyText) => ({
  type: constants.ADD_REPLY,
  payload: { commentId, replyText },
});

export const initComments = (comments) => ({
  type: constants.INIT_COMMENTS,
  payload: comments,
});