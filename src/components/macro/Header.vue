<template>
    <header>
        <div>
            <a href="#">
                <img src="../../assets/img/netflix-logo.png" alt="logo BoolFlix">
            </a>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Serie TV</a>
                </li>
                <li>
                    <a href="#">Film</a>
                </li>
            </ul>            
        </div>
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
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, #111 100%);
    // background-color: #111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
    div {
        ul {
            min-width: 185px;
            margin-left: 20px;
            list-style: none;
            display: flex;

            li {
                margin-right: 15px;
                a {
                    text-decoration: none;
                    color: white;
                    font-weight: bold;
                    font-size: 14px;
                }

            }
        }
        display: flex;
        align-items: center;
        height: 100%;
        > a {
            height: 100%;
            img {
                height: 100%;
            }
        }
    }
    
}
@media screen and (max-width: 660px) { //576px
    header {
        flex-direction: column;
        height: auto;
        padding-bottom: 20px;
        justify-content: center;
        div {

            > a {
                height: 80px;
            }
        }
    }
}


</style>