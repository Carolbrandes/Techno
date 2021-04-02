const buyMixin = {
  methods: {
    buy(produto) {
      console.log("comprei");
      if (produto.estoque !== 0 && produto.estoque > 0) {
        produto.estoque -= 1;

        const produtoVerificado = this.$store.state.shoppingBag.find(
          p => p.cod === this.cod
        );
        if (produtoVerificado) {
          this.$store.commit("SET_SHOPPING_BAG", { acao: "remove", produto });
          produto.amount++;
        }

        this.$store.commit("SET_SHOPPING_BAG", {
          acao: "add",
          produto: produto
        });
      }
    }
  }
};

export default buyMixin;
