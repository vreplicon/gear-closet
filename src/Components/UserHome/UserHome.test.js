import React from "react";
import ReactDOM from "react-dom";
import UserHome from "./UserHome";

it("renders UserHome component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserHome />, div);
  ReactDOM.unmountComponentAtNode(div);
});
