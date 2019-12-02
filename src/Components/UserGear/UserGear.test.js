import React from "react";
import ReactDOM from "react-dom";
import UserGear from "./UserGear";

it("renders UserGear component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserGear />, div);
  ReactDOM.unmountComponentAtNode(div);
});
