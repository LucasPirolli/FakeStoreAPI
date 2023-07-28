import React from "react";
import { withTranslation } from "react-i18next";

const Footer = ({ t }) => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <small>
          &copy; {t("2022 Todos os direitos reservados. Reliance Varejo Ltda.")}
        </small>
      </div>
    </footer>
  );
};

export default withTranslation()(Footer);
