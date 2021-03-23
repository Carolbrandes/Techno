export const state = () => ({
  products: []
});

export const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload;
  }
};

export const actions = {
  fetchProducts(context) {
    fetch("/api/produtos.json")
      .then(response => response.json())
      .then(json => context.commit("SET_PRODUCTS", json));
  }
};
