import { getRanHex } from "../../utils/common";
import constants from "../constants";
const savedStateFromLocalStorage = localStorage.getItem("reduxState");
const savedState = savedStateFromLocalStorage
  ? JSON.parse(savedStateFromLocalStorage)
  : null;

export const initialState = savedState || {
  auth: {
    isAuthenticated: false,
    user: null,
  },
  comments: [
    { id: getRanHex(6), text: "Top-level comment", parentId: null },
    {
      id: getRanHex(6),
      text: "First reply to the top-level comment",
      parentId: 1,
    },
    { id: getRanHex(6), text: "Reply to the first reply", parentId: 2 },
  ],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case constants.INIT_COMMENTS:
      return { ...state, comments: { ...action.payload } };

    case constants.ADD_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          { id: getRanHex(6), text: action.payload, parentId: null },
        ],
      };

    case constants.ADD_REPLY:
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            id: getRanHex(6),
            text: action.payload.replyText,
            parentId: action.payload.commentId,
          },
        ],
      };

    case constants.LOGIN:
      return {
        ...state,
        auth: {
          isAuthenticated: true,
          user: action.payload,
        },
      };

    case constants.LOGOUT:
      return {
        ...state,
        auth: {
          isAuthenticated: false,
          user: null,
        },
      };

    default:
      return state;
  }
};

export default reducers;
