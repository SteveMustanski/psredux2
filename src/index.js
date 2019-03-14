import React from "react";
import { render } from "react-dom";

function hi() {
  return <p>Hi!</p>;
}

render(<Hi />, document.getElementById("app"));
