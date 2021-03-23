<template>
    <div class="column is-4-desktop is-6-tablet is-4-mobile is-flex is-flex-direction-column is-align-items-center mb-5 mx-3">
      <img :src="src" :alt="name">
      <h4 class="product-name has-text-weight-bold has-text-centered">{{name}}</h4>
      <p class="product-price has-text-weight-bold has-text-centered pb-3">R$ {{price}}</p>
      <button class="product-buy" type="button">Comprar</button>
      <slot name="description"></slot>
    </div>
</template>

<script>
export default {
  props: ["name", "src", "price", "description"]
}
</script>

<style>

</style>
