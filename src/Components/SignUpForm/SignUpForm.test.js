import React from "react";
import ReactDOM from "react-dom";
import SignUpForm from "./SignUpForm";

it("renders SignUpForm component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SignUpForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
