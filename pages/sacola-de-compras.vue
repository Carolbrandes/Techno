<template>
    <div class="container mt-5">
        <h1 class="is-size-3 has-text-weight-bold pb-5">Sacola de Compras</h1>

        <div class="is-flex is-flex-direction-column is-align-items-center" v-if="this.$store.state.shoppingBag.length > 0">
            <div class="box column is-10 is-flex is-justify-content-space-between is-align-items-center" v-for="item in this.$store.state.shoppingBag" :key="item.cod">
                <div class="column is-2">
                    <img class="is-full" :src="item.img" :alt="item.nome">
                </div>

                <p>{{item.nome}}</p>
                <b-field label="">
                    <b-numberinput type="is-dark" :value="item.qtd"></b-numberinput>
                </b-field>

                <p>{{item.preco | money}}</p>
                <p>{{item.preco * item.qtd | money}}</p>
            </div>

            <div class="column is-10 is-flex is-justify-content-end">
                <p><b>Total:</b> {{this.$store.getters.total | money}}</p>
            </div>
        </div>

        <div v-else>
            <div class="box">
                <p class="has-text-centered">Sacola Vazia</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {


}
</script>

<style>

</style>
