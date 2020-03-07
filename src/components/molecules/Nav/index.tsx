import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import M from "materialize-css";
import { useStoreState, useStoreActions } from "../../../store/hooks";

import "./Nav.css";

function Nav() {
  const locale = useStoreState(state => state.intl.locale);
  const updateLocale = useStoreActions(actions => actions.intl.update);

  useEffect(() => {
    let elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
  }, []);

  useEffect(() => {
    console.log("locale ", locale);
  }, [locale]);

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
              <Link to="/scores">
                <FormattedMessage id="nav.scores" />
              </Link>
            </li>
            <li>
              <span className="dropdown-trigger btn" data-target="dropdown1">
                {locale}
              </span>
              <ul id="dropdown1" className="dropdown-content">
                <li onClick={() => updateLocale("en")}>
                  <span>
                    <FormattedMessage id="nav.en" />
                  </span>
                </li>
                <li onClick={() => updateLocale("fr")}>
                  <span>
                    <FormattedMessage id="nav.fr" />
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
