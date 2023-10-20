import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";

function App() {
  return (
    <div>
      <Button variant="contained" color="primary">
        Click me
      </Button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
