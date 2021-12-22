<template>
  <main>
      <FilmsList/>
      <SeriesList/>

  </main>
</template>

<script>
import FilmsList from '../sections/FilmsList.vue'
import SeriesList from '../sections/SeriesList.vue'

export default {
    name: 'Main',
    components: {
        FilmsList,
        SeriesList,
    },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/global.scss';

main {
    padding: 50px 30px;
    min-height: calc(100vh - 80px);
    background-color: #181818;
}
</style>