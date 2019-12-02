import React from "react";
import ReactDOM from "react-dom";
import SignInForm from "./SignInForm";

it("renders SignInForm component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SignInForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
