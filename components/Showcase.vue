<template>
   <div>
      <section class="products-showcase" v-show="$store.state.categorySelected.length <= 1">
          <Products v-for="product in this.$store.state.products" :key="product.id" :name="product.nome" :price="product.preco" :src="product.img"></Products>
      </section>

      <section class="products-showcase" v-show="this.$store.state.categorySelected.length > 0 && this.$store.state.categorySelected.includes('notebook')">
          <Products v-for="product in this.$store.getters.notebooks" :key="product.id" :name="product.nome" :price="product.preco" :src="product.img"></Products>
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
