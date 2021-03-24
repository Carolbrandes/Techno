<template>
  <main class="container page-wrapper">
      <Filters />
      <Showcase />
  </main>
</template>

<script>
export default {

  components: {
    Showcase: () => import("@/components/Showcase.vue"),
    Filters: () => import("@/components/Filters.vue")
  },

}
</script>

<style scoped>


@media screen and (min-width:1200px){
  .page-wrapper{
    display: flex;
    justify-content:space-between;
  }
}
</style>
