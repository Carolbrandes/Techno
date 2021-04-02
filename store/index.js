export const state = () => ({
  products: [],
  categorySelected: ["todos"],
  orderByPrice: "menorPreco",
  shoppingBag: []
});

export const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload;
  },

  SET_CATEGORY(state, payload) {
    state.categorySelected = payload;
  },

  SET_ORDER_PRICE(state, payload) {
    state.orderByPrice = payload;
  },

  SET_SHOPPING_BAG(state, payload) {
    if (payload.acao === "add") {
      state.shoppingBag.unshift(payload.produto);
    } else {
      state.shoppingBag.splice(
        state.shoppingBag.find(p => p.cod === payload.produto.cod),
        1
      );
    }
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
    if (state.orderByPrice === "menorPreco") {
      state.products = state.products.sort((a, b) => a.preco - b.preco);
    }

    if (state.orderByPrice === "maiorPreco") {
      state.products = state.products.sort((a, b) => b.preco - a.preco);
    }

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
  },

  amountShoppingBag(state) {
    return state.shoppingBag.reduce((acc, current) => acc + current.qtd, 0);
  },

  total(state) {
    return state.shoppingBag.reduce(
      (acc, current) => current.preco * current.qtd + acc,
      0
    );
  }
};
