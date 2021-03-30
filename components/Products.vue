<template>
    <div class="product mb-5 pb-5">
        <img class="product-image" :src="src" :alt="name">
        <h4 class="product-name has-text-weight-bold has-text-centered">{{name}}</h4>
        <p class="product-price has-text-weight-bold has-text-centered pb-3">{{price | money}}</p>

        <div class="buttons-wrapper">
            <NuxtLink class="know-product" :to="id">Ver mais</NuxtLink>
            <button class="product-buy">Comprar</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: ["id", "name", "src", "price"],

    filters: {
        money(valor) {
            return valor.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })
        }
    }
}
</script>

<style scoped>
.product {
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.product-image {
    width: 100%;
    display: block;
    margin-bottom: 1rem;
}

.product-name {
    font-size: 1.3rem;
}

.product-price {
    font-size: 1.5rem;
    font-weight: normal;
    color: #8f1515
}

.buttons-wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.know-product {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    color: #000;
    border-radius: 10px;
    height: 45px;
    text-transform: uppercase;
    font-size: 1.2rem;
    padding: 0 2rem;
    cursor: pointer;
    margin-right: 1rem;
    transition: .3s;
}

.know-product:hover {
    background: #d8d8d8;
}

@media screen and (min-width: 1200px) {
    .product {
        width: 30%
    }
}
</style>
