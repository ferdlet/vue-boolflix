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
    data() {
        return {
            
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../../assets/style/global.scss';

</style>