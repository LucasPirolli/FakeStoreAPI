import React from "react";
import { useEffect, useState } from "react";

import "semantic-ui-css/semantic.min.css";

import "../style/Main.scss";

import Header from "./Header";
import MainSection from "./MainSection";
import ProductFilter from "./ProductFilter";
import ProductModal from "./ProductModal";
import Footer from "./Footer";

import {
  allCategories,
  fetchAllProducts,
  fetchProductDetails,
} from "../services/endPoints";

import { withTranslation } from "react-i18next";

function FakeStore() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filtroSelecionado, setFiltroSelecionado] = useState("");
  const [title, setTitle] = useState("");
  const [orderFilter, setOrderFilter] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCategorieChange = (event) => {
    setFiltroSelecionado(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrderFilter(event.target.value);
  };

  const getFilteredProducts = () => {
    if (title === "" && filtroSelecionado === "" && orderFilter === "") {
      return products; // Retorno de todos os produtos caso os estados estejam vazios
    }

    // Copia do array de todos produtos
    let filtered = [...products];

    // Filtro categorias
    if (filtroSelecionado !== "") {
      filtered = filtered.filter(
        (product) => product.category === filtroSelecionado
      );
    }

    // Filtro título
    if (title !== "") {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(title)
      );
    }

    // Ordenação dos produtos
    if (orderFilter === "maior-preco") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (orderFilter === "menor-preco") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (orderFilter === "a-z") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (orderFilter === "z-a") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    return filtered;
  };

  useEffect(() => {
    fetchAllProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    allCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    if (selectedProductId) {
      fetchProductDetails(selectedProductId).then((data) => {
        setSelectedProduct(data);
      });
    }
  }, [selectedProductId]);

  return (
    <React.Fragment>
      <Header />
      <ProductFilter
        title={title}
        filtroSelecionado={filtroSelecionado}
        orderFilter={orderFilter}
        categories={categories}
        handleTitleChange={handleTitleChange}
        handleCategorieChange={handleCategorieChange}
        handleOrderChange={handleOrderChange}
      />
      <MainSection
        filteredProducts={getFilteredProducts()}
        setSelectedProductId={setSelectedProductId}
      />
      <ProductModal
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <Footer />
    </React.Fragment>
  );
}

export default FakeStore;
