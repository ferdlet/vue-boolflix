<template>
    <section class="lista-films">
        <h2>Films</h2>
        <ul>
            <li v-for="(film, index) in dataShared.films" :key="index">
                <Card :info="film"/>
            </li>
        </ul>
    </section>
</template>

<script>
import dataShared from '../../share/dataShared';
import Card from '../elements/Card.vue';


export default {
    name: 'FilmsList',
    components: {
        Card,
    },
    data() {
        return {
            dataShared,
            flag: '',
        }
    },
    methods: {


    }
}
</script>

<style lang="scss" scoped>


</style>