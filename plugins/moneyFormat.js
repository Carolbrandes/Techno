import Vue from "vue";

Vue.filter("money", value => {
  return value > 0
    ? new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(value)
    : "-";
});
