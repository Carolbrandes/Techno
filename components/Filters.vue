<template>
    <section class="filters">
      <div>
        <h4>Categorias</h4>
        <div class="form-check"  v-for="(category, index) in this.$store.getters.productCategory" :key="index">
          <input class="mr-2" type="checkbox" name="category" :id="category">
          <label :for="category">{{category}}</label>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  created(){
    this.$store.dispatch("fetchProducts");
  }
}
</script>

<style scoped>
.filters{
  padding-top: 3rem;
}

h4{
  border-bottom: 1px solid #000;
  padding-bottom: 0.2rem;
  padding-left: 0.2rem;
  font-weight: bold;
}

.form-check{
  padding-top: 1rem;
  padding-left: 0.2rem;
}

@media screen and (min-width:1200px){
    .filters{
      width: 20%;
      border-right: 1px solid #000;
    }
  }
</style>
