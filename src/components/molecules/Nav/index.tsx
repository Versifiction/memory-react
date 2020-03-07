import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import M from "materialize-css";
// @ts-ignore
import Flag from "react-world-flags";

import { useStoreState, useStoreActions } from "../../../store/hooks";
import "./Nav.css";

function Nav() {
  const locale = useStoreState(state => state.intl.locale);
  const updateLocale = useStoreActions(actions => actions.intl.update);

  useEffect(() => {
    let elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
  }, []);

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
              <Link to="/rules">
                <FormattedMessage id="nav.rules" />
              </Link>
            </li>
            <li>
              <Link to="/scores">
                <FormattedMessage id="nav.scores" />
              </Link>
            </li>
            <li>
              <span className="dropdown-trigger btn" data-target="dropdown1">
                <span className="nav-language">
                  <Flag
                    code={locale === "fr" ? "FR" : "US"}
                    width="24"
                    height="16"
                  />
                  <span className="nav-dropdown-language">{locale}</span>
                </span>
              </span>
              <ul id="dropdown1" className="dropdown-content">
                <li onClick={() => updateLocale("en")}>
                  <span className="nav-dropdown-language-container">
                    <Flag code="US" width="24" height="16" />
                    <span className="nav-dropdown-language">
                      <FormattedMessage id="nav.en" />
                    </span>
                  </span>
                </li>
                <li onClick={() => updateLocale("fr")}>
                  <span className="nav-dropdown-language-container">
                    <Flag code="FR" width="24" hieght="16" />
                    <span className="nav-dropdown-language">
                      <FormattedMessage id="nav.fr" />
                    </span>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
