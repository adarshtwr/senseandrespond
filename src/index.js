import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Comments from "./pages/Comments";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div style={{ maxWidth: "600px", margin: "40px auto" }}>
        <h1>Nested Comment System</h1>
        <Comments />
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
