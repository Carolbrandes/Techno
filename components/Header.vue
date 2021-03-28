<template>
    <header>
        <div class="container is-flex is-justify-content-space-between py-2">
            <NuxtLink to="/" class="logo">
                <img src="~/assets/techno.svg" alt="Techno">
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

.logo img {
    width: 100%;
}
</style>
