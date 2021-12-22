<template>
    <section id="lista-series">
        <h2>Serie TV</h2>

        <ul>
            <li v-for="(serie, index) in dataShared.series" :key="index">
                <Card :info="serie"/>

            </li>
        </ul>
    </section>
</template>

<script>
import dataShared from '../../share/dataShared.js';
import Card from '../elements/Card.vue';


export default {
    name: 'SeriesList',
    components: {
        Card
    },
    data() {
        return {
            dataShared,
        }
    },
    methods: {
        languageFlag(lingua) {
            if (this.flag == dataShared.flags[lingua]) {
                this.flag = dataShared.flags[lingua];
            } else {
                this.flag = '';
            }
        },

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