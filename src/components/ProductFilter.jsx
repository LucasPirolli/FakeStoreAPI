import React from "react";
import { withTranslation } from "react-i18next";

const ProductFilter = ({
  title,
  filtroSelecionado,
  orderFilter,
  categories,
  handleTitleChange,
  handleCategorieChange,
  handleOrderChange,
  t
}) => {
  return (
    <section className="filter">
      <input
        placeholder={t("Pesquisar")}
        type="text"
        className="input"
        name="search"
        value={title}
        onChange={handleTitleChange}
      />
      <select
        value={filtroSelecionado}
        onChange={handleCategorieChange}
        className="select"
      >
        <option value="">{t("Categoria")}</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select
        value={orderFilter}
        onChange={handleOrderChange}
        className="select-order"
      >
        <option value="value">{t("Ordenar por")}</option>
        <option value="maior-preco">{t("Maior preço")}</option>
        <option value="menor-preco">{t("Menor preço")}</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>
    </section>
  );
};

export default withTranslation()(ProductFilter);
