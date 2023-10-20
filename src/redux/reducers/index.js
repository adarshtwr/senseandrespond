import constants from "../constants";
const initialState = {
  comments: [
    { id: 1, text: "Top-level comment", parentId: null },
    { id: 2, text: "First reply to the top-level comment", parentId: 1 },
    { id: 3, text: "Reply to the first reply", parentId: 2 },
  ],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case constants.INIT_COMMENTS:
      return action.payload;

    case constants.ADD_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          { id: Date.now(), text: action.payload, parentId: null },
        ],
      };

    case constants.ADD_REPLY:
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            id: Date.now(),
            text: action.payload.replyText,
            parentId: action.payload.commentId,
          },
        ],
      };

    default:
      return state;
  }
};

export default reducers;
