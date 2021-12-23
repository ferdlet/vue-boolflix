<template>
    <section class="list">
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
import axios from 'axios';


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
    created() {
        axios.get("https://api.themoviedb.org/3/movie/popular", {
            params: {
                api_key: dataShared.apiKey,
                language: 'it-IT'
            }
        })
        .then((response) => {
            dataShared.films = response.data.results;
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



</style>