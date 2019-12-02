import React from "react";
import ReactDOM from "react-dom";
import UpdateGear from "./UpdateGear";

it("renders UpdateGear component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UpdateGear />, div);
  ReactDOM.unmountComponentAtNode(div);
});
