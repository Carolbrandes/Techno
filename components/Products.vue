<template>
    <div class="column is-4 mb-5 pb-5">
        <div class="column is-12 px-0">
            <img class="product-image" :src="img" :alt="nome">
        </div>
        <h4 class="product-name has-text-weight-bold has-text-centered">{{nome}}</h4>
        <p class="product-price has-text-weight-bold has-text-centered pb-3">{{preco | money}}</p>

        <div class="buttons-wrapper">
            <button class="product-buy" :class="product.estoque === 0 ? 'inactive' : 'active'" :disabled="product.estoque === 0 ? true : false" @click="buy(product)">{{product.estoque === 0 ? 'Esgotado' : 'Comprar'}}</button>
            <NuxtLink class="know-product mt-2" :to="cod">Ver mais</NuxtLink>
        </div>
    </div>
</template>

<script>
import buyMixin from "@/mixins/buy.js"

export default {
    data() {
        return {
            product: { cod: this.cod, nome: this.nome, img: this.img, preco: this.preco, estoque: this.estoque, qtd: 1 }
        }
    },
    props: ["cod", "nome", "img", "preco", "estoque"],
    mixins: [buyMixin]
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
    flex-direction: column;
    align-items: center;
}

.know-product {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    text-transform: uppercase;
    text-decoration: underline;
    cursor: pointer;
    transition: .3s;
}

.know-product:hover {
    background: #d8d8d8;
}
</style>
