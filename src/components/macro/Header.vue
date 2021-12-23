<template>
  <header>
      <a href="#">
          <img src="../../assets/img/netflix-logo.png" alt="logo BoolFlix">
      </a>
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
    background-color: #111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
    > a {
        height: 100%;
        img {
        height: 100%;
        }
    }
    
}
@media screen and (max-width: 576px) {
    header {
        flex-direction: column;
        height: auto;
        padding-bottom: 20px;
        justify-content: center;
        > a {
            height: 80px;
        }
    }
}

</style>