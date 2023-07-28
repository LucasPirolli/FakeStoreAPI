import products from '../fakestore'
const fetchAllProducts = async () => {
  // return products
  try {
    const response = await fetch(
      `${process.env.REACT_APP_LINK_BASIC_PATH}/products`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Erro ao buscar informações gerais dos produtos na API", error);
    return [];
  }
};

const allCategories = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_LINK_BASIC_PATH}/products/categories`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Erro ao buscar categorias da API", error);
    return [];
  }
};

const fetchProductDetails = async (id) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_LINK_BASIC_PATH}/products/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Erro ao buscar informações do produto na API", error);
    return null;
  }
};

export { fetchAllProducts, allCategories, fetchProductDetails };
