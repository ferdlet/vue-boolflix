<template>
    <section id="lista-series">
        <h2>Serie TV</h2>
        <ul>
            <li v-for="(serie, index) in dataShared.series" :key="index">
                <Card :info="serie"/>
            </li>
        </ul>
    </section>
</template>

<script>
import dataShared from '../../share/dataShared.js';
import Card from '../elements/Card.vue';


export default {
    name: 'SeriesList',
    components: {
        Card
    },
    data() {
        return {
            dataShared,
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/global.scss';


</style>