<template>
    <main>
        
        <div v-if="dataShared.FilmsList == true">
            <FilmsList />

        </div>
        <div v-else-if="dataShared.SeriesList == true">
            <SeriesList/>

        </div>
        <div v-else>
            <FilmsList />
            <SeriesList/>
        </div>
    </main>
</template>

<script>
import FilmsList from '../sections/FilmsList.vue'
import SeriesList from '../sections/SeriesList.vue'
import dataShared from '../../share/dataShared';

export default {
    name: 'Main',
    components: {
        FilmsList,
        SeriesList,
    },    
    data() {
        return {
            dataShared,
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/global.scss';

main {
    padding: 30px 30px 80px 30px;
    min-height: calc(100vh - 80px);
    // background-color: #181818;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, #111 0%, #181818 100%);
}
</style>