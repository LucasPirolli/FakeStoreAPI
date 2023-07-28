import React from "react";
import { useState } from "react";
import { Rating } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

const MainSection = ({ filteredProducts, setSelectedProductId }) => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("pt-BR");

  const handleLanguageToggle = () => {
    const newLanguage = currentLanguage === "pt-BR" ? "en-US" : "pt-BR";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <section className="main">
      <div className="content">
        <h2>{t("Produtos")}</h2>
        <div className="ui toggle checkbox">
          <input
            type="checkbox"
            name="public"
            checked={currentLanguage === "en-US"}
            onChange={handleLanguageToggle}
          />
          <label>{currentLanguage === "en-US" ? "EN" : "PT"}</label>
        </div>
      </div>
      <div className="grid-products">
        {filteredProducts.map((product) => (
          <div
            className="card"
            key={product.id}
            onClick={() => setSelectedProductId(product.id)}
          >
            <div className="image-container">
              <img className="img" src={product.image} alt="cart" />
            </div>
            <div className="informations">
              <h3>{product.title}</h3>
              <span className="category">{product.category}</span>
              <span className="rating">
                <Rating
                  icon="star"
                  defaultRating={product.rating.rate}
                  maxRating={5}
                  disabled
                />
                <p className="count-rating">{product.rating.rate}</p>
                <p className="length">
                  {product.rating.count} {t("avalicações")}
                </p>
              </span>
            </div>
            <div className="container-price">
              <span className="price">
                {t("R$")} {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainSection;
