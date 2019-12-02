import React from "react";
import ReactDOM from "react-dom";
import UpdateList from "./UpdateList";

it("renders UpdateList component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UpdateList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
