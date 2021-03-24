<template>
    <div class="product column is-flex is-flex-direction-column is-align-items-center mb-5 mx-3">
      <img class="product-image" :src="src" :alt="name">
      <h4 class="product-name has-text-weight-bold has-text-centered">{{name}}</h4>
      <p class="product-price has-text-weight-bold has-text-centered pb-3">R$ {{price}}</p>
      <button class="product-buy" type="button">Comprar</button>
    </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props: ["name", "src", "price"]
}
</script>

<style scoped>

  .product{
    width: 50%
  }

  .product-image{
    width: 100%;
    display: block;
  }


@media screen and (min-width: 1200px){
  .product{
      width: 40%
  }
}
</style>
