<template>
    <div>
        <select v-model="orderByPrice">
          <option value="menorPreco">Menor Preço</option>
          <option value="maiorPreco">Maior Preço</option>
        </select>
    </div>
</template>

<script>
export default {
  computed: {
    orderByPrice:{
      get(){
        return this.$store.state.orderByPrice
      },
      set(value){
        this.$store.commit("SET_ORDER_PRICE", value)
      }
    }
  },
}
</script>

<style scoped>
select {
    background-color: #000;
    color: #fff;
    border-radius: 30px;
    border: none;
    outline: none;
    height: 40px;
    padding: 0 1rem;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('~/assets/sort-down.svg');
    background-size: 7px;
    background-position-x: 92%;
    background-position-y: 50%;
    background-repeat: no-repeat;
}
</style>
