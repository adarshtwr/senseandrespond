import { createStore } from "redux";
import reducers, { initialState } from "./reducers";

const store = createStore(reducers, initialState);

store.subscribe(() => {
  const state = store.getState();
  console.log("state === ", state)
  const persistedState = {
    auth: state.auth || {},
    comments: state.comments || {},
  };

  localStorage.setItem("reduxState", JSON.stringify(persistedState));
});

export default store;
