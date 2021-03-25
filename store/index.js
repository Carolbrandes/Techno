export const state = () => ({
  products: [],
  categorySelected: ["todos"]
});

export const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload;
  },

  SET_CATEGORY(state, payload) {
    state.categorySelected = payload;
  }
};

export const actions = {
  fetchProducts(context) {
    fetch("/api/produtos.json")
      .then(response => response.json())
      .then(json => context.commit("SET_PRODUCTS", json));
  }
};

export const getters = {
  productCategory(state) {
    return state.products.map(product => product.categoria);
  },

  notebooks(state) {
    return state.products.filter(product => product.categoria === "notebook");
  }
};
