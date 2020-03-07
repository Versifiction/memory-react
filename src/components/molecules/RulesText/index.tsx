import * as React from "react";
import { FormattedMessage } from "react-intl";

import Button from "../../atoms/Button";
import "./RulesText.css";

function RulesText() {
  return (
    <div className="RulesText">
      <div className="container">
        <h1>
          <FormattedMessage id="nav.rules" />
        </h1>
        <p>Bienvenue dans le Memory des Super-Héros !</p>
        <p>
          Le but du jeu est simple :{" "}
          <span className="blueText">
            retourner toutes les cartes du plateau, en trouvant les paires de
            logo de super-héros correspondantes.
          </span>
        </p>

        <p>
          Vous pourrez retourner deux cartes à chaque tour : si elles
          correspondent, elles restent visibles sinon elles retournent sur leur
          partie cachée !
        </p>
        <p>
          Vous devrez donc mémoriser leur position afin de vous souvenir où
          elles se trouvent, si vous retournez l'autre carte correspondante.
        </p>
        <span className="blueText">
          Si vous trouvez les 12 paires avant la fin du temps imparti, vous
          gagnez !
        </span>
        <span className="bold">
          <p>
            Attention : le chronomètre se lance dès que vous appuyez sur
            "Jouer". Bon jeu !
          </p>
        </span>
        <Button />
      </div>
    </div>
  );
}

export default RulesText;
