<template>
    <header>
        <div class="container is-flex is-justify-content-space-between is-align-items-center py-2">
            <NuxtLink to="/" class="logo">
                <img src="~/assets/techno.svg" alt="Techno">
            </NuxtLink>

             <NuxtLink to="/sacola-de-compras" class="sacola-compras has-text-white is-flex is-align-items-center">
                <img class="mr-2" src="~/assets/bolsa-de-compras.svg" alt="sacola de compras">
                {{ this.$store.state.shoppingBag && this.$store.getters.amountShoppingBag }}
            </NuxtLink>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
    background-color: #000;
}

.logo {
    display: block;
    width: 100px;
}

.logo img, .sacola-compras img {
    width: 100%;
}

.sacola-compras{
  width: 40px;
}



</style>
