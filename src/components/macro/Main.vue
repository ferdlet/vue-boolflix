<template>
  <main>
      <FilmsList/>
  </main>
</template>

<script>
import FilmsList from '../sections/FilmsList.vue'

export default {
    name: 'Main',
    components: {
        FilmsList
    },
    data() {
        return {
            
        }
    }

}
</script>

<style lang="scss" scoped>

</style>