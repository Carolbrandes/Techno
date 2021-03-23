<template>
  <div>
      <section class="section">
          <div class="columns is-flex-wrap-wrap is-justify-content-center">
            <Products v-for="product in this.$store.state.products" :key="product.id" :name="product.nome" :price="product.preco" :src="product.img"></Products>
          </div>
      </section>
  </div>
</template>

<script>
export default {
  components: {
    Products: () => import("@/components/Products.vue")
  },

  created(){
    this.$store.dispatch("fetchProducts");
  }
}
</script>
