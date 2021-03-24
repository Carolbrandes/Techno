<template>
   <div class="products-showcase">
      <section v-if="!this.$store.state.categorySelected">
      <Products v-for="product in this.$store.state.products" :key="product.id" :name="product.nome" :price="product.preco" :src="product.img"></Products>
    </section>

     <!-- <section v-show="" class="products-showcase">
      <Products v-for="product in this.$store.getters.notebooks" :key="product.id" :name="product.nome" :price="product.preco" :src="product.img"></Products>
    </section> -->
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

<style scoped>
.products-showcase{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 3rem;
}

@media screen and (min-width: 1200px){
  .products-showcase{
    width: 70%;
  }
}
</style>
