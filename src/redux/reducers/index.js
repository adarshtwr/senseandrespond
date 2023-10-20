import { getRanHex } from "../../utils/common";
import constants from "../constants";
const savedStateFromLocalStorage = localStorage.getItem("reduxState");
const savedState = savedStateFromLocalStorage
  ? JSON.parse(savedStateFromLocalStorage)
  : null;

const defaultState = {
  auth: {
    isAuthenticated: false,
    user: null,
  },
  comments: [],
  currentPage: 1,
};
export const initialState = savedState || defaultState;

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

    case constants.GO_TO_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case constants.LOGOUT:
      return defaultState;

    default:
      return state;
  }
};

export default reducers;
