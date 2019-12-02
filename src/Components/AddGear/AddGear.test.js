import React from "react";
import ReactDOM from "react-dom";
import AddGear from "./AddGear";

it("renders AddGear component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddGear />, div);
  ReactDOM.unmountComponentAtNode(div);
});
