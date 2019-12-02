import React from "react";
import ReactDOM from "react-dom";
import UserLists from "./UserLists";

it("renders UserLists component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserLists />, div);
  ReactDOM.unmountComponentAtNode(div);
});
