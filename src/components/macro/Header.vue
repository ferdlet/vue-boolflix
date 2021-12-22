<template>
  <header>
      <img src="../../assets/img/netflix-logo.png" alt="logo BoolFlix">
      <SearchBar/>
  </header>
</template>

<script>
import SearchBar from '../elements/SearchBar.vue';

export default {
    name: 'Header',
    components: {
        SearchBar
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/global.scss';

header {
    height: 80px;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
    > img {
        height: 100%;
    }
}
</style>