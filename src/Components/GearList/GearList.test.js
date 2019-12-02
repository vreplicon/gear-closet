import React from "react";
import ReactDOM from "react-dom";
import GearList from "./GearList";

it("renders GearList component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GearList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
