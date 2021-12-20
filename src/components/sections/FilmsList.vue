<template>
    <section>
        <div class="container">
            <SearchBar/>
            <div class="lista-films">
                 <h2>Films</h2>
                <ul>
                    <li v-for="(film, index) in dataShared.films" :key="index">
                        {{film.title}} - {{film.original_title}} - {{film.vote_count}} - <img :lingua="languageFlag(film.original_language)" :src="flag" :alt="film.original_language">
                    </li>
                </ul>
            </div>
             <div class="lista-series">
                 <h2>Serie TV</h2>
                <ul>
                    <li v-for="(serie, j) in dataShared.series" :key="j">
                        {{serie.name}} - {{serie.original_name}} - {{serie.vote_count}} - <img :ciao="languageFlag(serie.original_language)" :src="flag" :alt="serie.original_language">
                    </li>
                </ul>
            
            </div>
        </div>
    </section>
</template>

<script>
import SearchBar from '../commons/SearchBar.vue';
import dataShared from '../../share/dataShared';

export default {
    name: 'FilmsList',
    components: {
        SearchBar,
    },
    data() {
        return {
            dataShared,
            flag: '',
        }
    },
    methods: {
        languageFlag(lingua) {
            switch (lingua) {
                case "en":
                    this.flag = 'https://cdn-icons-png.flaticon.com/512/197/197374.png';
                    break;
                case "it":
                    this.flag = 'https://cdn-icons-png.flaticon.com/512/197/197626.png';
                    break;
                case "es":
                    this.flag = 'https://cdn-icons-png.flaticon.com/512/197/197593.png';
                    break;
                case "fr":
                    this.flag = 'https://cdn-icons-png.flaticon.com/512/197/197560.png';
                    break;
                case "de":
                    this.flag = 'https://cdn-icons-png.flaticon.com/512/197/197571.png';
                    break;
                default:
                    this.flag = '';
            }
        }
    }
}
</script>

<style lang="scss" scoped>

li {
    line-height: 20px;
    > img {
        height: 16px;
        vertical-align: text-top;
    }
} 

</style>