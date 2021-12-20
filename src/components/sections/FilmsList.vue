<template>
    <section>
        <div class="container">
            <SearchBar/>
            <div class="lista-films">
                <ul>
                    <li v-for="(film, index) in dataShared.films" :key="index">
                        {{film.title}} - {{film.original_title}} - {{film.original_language}} - {{film.vote_count}}
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
            dataShared
        }
    }
}
</script>

<style lang="scss" scoped>

</style>