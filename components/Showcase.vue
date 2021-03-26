<template>
   <div>
      <section class="products-showcase">
          <Products v-for="product in this.$store.getters.productsFiltered" :key="product.id" :name="product.nome" :price="product.preco" :src="product.img"></Products>
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

<style>
.products-showcase{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-top: 3rem;
}

@media (min-width: 1200px){
  .products-showcase{
    width: 70vw;
  }
}

</style>
