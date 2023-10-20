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

export const login = (user) => ({
  type: constants.LOGIN,
  payload: user,
});

export const logout = () => ({
  type: constants.LOGOUT,
});

export const goToPage = (pageNumber) => ({
  type: constants.GO_TO_PAGE,
  payload: pageNumber,
});
