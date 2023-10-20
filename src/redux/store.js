import { createStore } from "redux";
import reducers, { initialState } from "./reducers";

const store = createStore(reducers, initialState);

store.subscribe(() => {
  const state = store.getState();
  const persistedState = {
    auth: state.auth || {},
    comments: state.comments || {},
    currentPage: state.currentPage || 1,
  };

  localStorage.setItem("reduxState", JSON.stringify(persistedState));
});

export default store;
