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

  productsFiltered(state) {
    if (state.categorySelected.includes("todos") === false) {
      const list = [];

      state.products.forEach(prod => {
        state.categorySelected.forEach(categ => {
          if (prod.categoria === categ) {
            list.push(prod);
          }
        });
      });

      return list;
    } else {
      return state.products;
    }
  }
};
