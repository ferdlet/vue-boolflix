<template>
    <div class="search-bar">
        <input type="text" v-model="dataShared.inputRicerca">
        <button @click="ricerca()">Ricerca</button>
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
                    api_key: 'a4a9b8d54eb726132cc1223964c218f1',
                    query: dataShared.inputRicerca,
                    language: 'it_IT'
                }
            })
            .then((response) => {
                dataShared.films = response.data.results;
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