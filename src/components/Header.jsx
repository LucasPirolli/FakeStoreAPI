import React from "react";
import cart from "../assets/Buy.svg";
import { withTranslation } from "react-i18next";

const Header = ({ t }) => {
  return (
    <header className="header">
      <h1 className="title">Brand</h1>
      <div className="container-cart">
        <img className="img" src={cart} alt="cart" />
        <p className="text">{t("Carrinho")}</p>
      </div>
    </header>
  );
};

export default withTranslation()(Header);
