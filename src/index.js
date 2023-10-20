import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Comments from "./pages/Comments";
import Login from "./pages/Login";
import store from "./redux/store";
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

const root = document.getElementById("app");
const appRoot = createRoot(root);
appRoot.render(<App />);
