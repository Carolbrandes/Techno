<template>
    <div class="product mb-5 pb-5">
        <img class="product-image" :src="src" :alt="nome">
        <h4 class="product-name has-text-weight-bold has-text-centered">{{nome}}</h4>
        <p class="product-price has-text-weight-bold has-text-centered pb-3">{{price | money}}</p>

        <div class="buttons-wrapper">
            <NuxtLink class="know-product" :to="cod">Ver mais</NuxtLink>
            <button class="product-buy" :class="product.estoque === 0 ? 'inactive' : 'active'" :disabled="product.estoque === 0 ? true : false" @click="buy">{{product.estoque === 0 ? 'Esgotado' : 'Comprar'}}</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: { cod: this.cod, nome: this.nome, src: this.src, price: this.price, estoque: this.estoque, amount: 1 }
        }
    },
    props: ["cod", "nome", "src", "price", "estoque"],

    filters: {
        money(valor) {
            return valor.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })
        }
    },

    methods: {
        buy() {
            console.log("comprei")
            if (this.product.estoque !== 0 && this.product.estoque > 0) {
               this.product.estoque -= 1

                const produto = this.$store.state.shoppingBag.find(p => p.cod === this.cod)
                if (produto) {
                    this.$store.commit("SET_SHOPPING_BAG", { acao: "remove", produto })
                    this.product.amount++
                }

                this.$store.commit("SET_SHOPPING_BAG", { acao: "add", produto: this.product })
            }
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
