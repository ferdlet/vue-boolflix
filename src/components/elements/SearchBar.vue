<template>
    <div class="search-bar">
        <form @submit.prevent="ricerca()">
            <input type="text" v-model="dataShared.inputRicerca">
            <button>Ricerca</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import dataShared from '../../share/dataShared';

export default {
    name: 'SearchBar',
    data() {
        return {
            dataShared
        }
    },
    methods: {
        ricerca() {
            axios.get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    api_key: dataShared.apiKey,
                    query: dataShared.inputRicerca,
                    language: 'it-IT'
                }
            })
            .then((response) => {
                dataShared.films = response.data.results;
            })
            .catch((error) => {
                console.log(error);
            });
            axios.get("https://api.themoviedb.org/3/search/tv", {
                params: {
                    api_key: dataShared.apiKey,
                    query: dataShared.inputRicerca,
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

    },
}
</script>

<style lang="scss" scoped>

</style>