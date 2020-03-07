import * as React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <FormattedMessage id="nav.title" />
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/game">
                <FormattedMessage id="nav.play" />
              </Link>
            </li>
            <li>
              <Link to="/scoreboards">
                <FormattedMessage id="nav.scores" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
