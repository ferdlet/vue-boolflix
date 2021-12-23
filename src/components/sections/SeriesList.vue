<template>
    <section id="series" class="list">
        <h2>Serie TV</h2>
        <div class="empty" v-if="dataShared.series.length == 0"><h2>Nessun risultato trovato!</h2></div>
        <ul v-else>
            <li v-for="(serie, index) in dataShared.series" :key="index">
                <Card :info="serie"/>
            </li>
        </ul>
    </section>
</template>

<script>
import dataShared from '../../share/dataShared.js';
import Card from '../elements/Card.vue';
import axios from 'axios';


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
    created() {
        axios.get("https://api.themoviedb.org/3/tv/popular", {
            params: {
                api_key: dataShared.apiKey,
                language: 'it-IT'
            }
        })
        .then((response) => {
            dataShared.series = response.data.results;
        })
        .catch((error) => {
            console.log(error);
        });
    },

}
</script>

<style lang="scss" scoped>
@import '../../assets/style/global.scss';
@import '../../assets/style/list.scss';

#series {
    margin-top: 60px;
}

</style>