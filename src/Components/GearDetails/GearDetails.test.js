import React from "react";
import ReactDOM from "react-dom";
import GearDetails from "./GearDetails";

it("renders GearDetails component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GearDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
