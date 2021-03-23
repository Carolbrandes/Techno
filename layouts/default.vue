<template>
    <div>
     <Header />
    <nuxt/>
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/Header.vue')
  }
}
</script>
