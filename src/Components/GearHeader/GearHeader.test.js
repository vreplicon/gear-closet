import React from "react";
import ReactDOM from "react-dom";
import GearHeader from "./GearHeader";

it("renders GearHeader component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GearHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
