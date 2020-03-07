import * as React from "react";
import { BrowserRouter } from "react-router-dom";

import Providers from "../src/providers";
import Router from "./Router";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Providers>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Providers>
    </div>
  );
}

export default App;
