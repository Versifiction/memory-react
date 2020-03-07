import * as React from "react";
import { Link } from "react-router-dom";

import Home from "../Home";
import "./Error.css";

function Error() {
  return (
    <div className="Error">
      <p>404</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Error;
