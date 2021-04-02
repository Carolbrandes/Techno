<template>
    <main v-if="product" class="container">

        <section class="product-wrapper">
            <div>
              <img :src="product.img" :alt="product.nome">
            </div>

            <div class="product-info">
                <h1 class="product-name">{{product.nome}}</h1>
                <p class="product-description">{{product.descricao}}</p>
                <p class="product-price">{{product.preco | money}}</p>
                <button class="product-buy" :class="product.estoque === 0 ? 'inactive' : 'active'" :disabled="product.estoque === 0 ? true : false" @click="buy(product)">{{product.estoque === 0 ? 'Esgotado' : 'Comprar'}}</button>
            </div>
        </section>


        <section class="reviews-wrapper pb-5">
            <h2 class="reviews-title">Avaliações</h2>

            <div>
                <div v-for="(avaliacao, index) in product.reviews" :key="index" class="review">
                    <cite>{{avaliacao.descricao}}</cite>

                    <div class="review-author">
                        <span class="review-author-name">{{avaliacao.nome}}</span>

                        <div>
                            <svg class="review-starts" v-for="(estrela) in avaliacao.estrelas" :key="estrela" height="8" viewBox="0 -10 511.99143 511" width="8" xmlns="http://www.w3.org/2000/svg"><path d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import buyMixin from "@/mixins/buy.js"

export default {
    mixins: [buyMixin],
    data() {
        return {
           product: {cod: '', nome: '', descricao: '', img: '', preco: '', estoque: '', qtd: 1, reviews: []}
        }
    },
    created() {
        console.log(this.$route.params.id)
         this.$store.dispatch("fetchProducts");
    },
    beforeMount(){
      console.log("oii")
      const findProduct = this.$store.state.products.find(p => p.id === this.$route.params.id)
      console.log(findProduct)

        for (let property in findProduct){
            console.log(property + " = " + findProduct[property]);
            if(property === "id"){
                this.product.cod = findProduct[property]
            }

            if(property === "nome"){
                this.product.nome = findProduct[property]
            }

            if(property === "preco"){
                this.product.preco = findProduct[property]
            }

            if(property === "img"){
                this.product.img = findProduct[property]
            }

            if(property === "estoque"){
                this.product.estoque = findProduct[property]
            }

            if(property === "descricao"){
                this.product.descricao = findProduct[property]
            }

            if(property === "reviews"){
                this.product.reviews = findProduct[property]
            }
        }
    }


}
</script>

<style scoped>
main {
    padding-top: 2rem;
}

.product-wrapper {
    display: flex;
    align-items: center;
}

.product-info {
    width: 40%;
    padding-left: 6rem;
}

.product-name {
    font-weight: bold;
    font-size: 1.5rem;
    padding-bottom: 1rem;
}

.product-description {
    padding-bottom: 1rem;
}

.product-price {
    padding-bottom: 1.2rem;
    font-weight: bold;
    font-size: 1.8rem;
}

.reviews-wrapper {
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.reviews-title {
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    padding-bottom: 2rem;
}

.review {
    padding-bottom: 2rem;
}

.review-author {
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
}

.review-author-name {
    font-weight: bold;
}

.review-starts {
    margin-right: 0.3rem;
}
</style>
