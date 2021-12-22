<template>
    <div class="card">
        <h3>{{info.title || info.name}}</h3>
        <h4>{{info.original_title || info.original_name}}</h4>
        <div>
            <span v-for="(stella, j) in Math.ceil(info.vote_average / 2)" :key="j">
                &#9733;
            </span>
        </div>
        <img :lingua="languageFlag(info.original_language)" :src="flag" :alt="info.original_language">
        <div>
            <img v-if="info.poster_path" :src="'https://image.tmdb.org/t/p/w342/' + info.poster_path" :alt="info.name || info.title">
            <img v-else :alt="info.name || info.title">
        </div>
    </div>
</template>

<script>
import dataShared from '../../share/dataShared';

export default {
    name: 'Card',
    props: {
        info: Object,
    },
    data() {
        return {
            dataShared,
            flag: '',
        }
    },
    methods: {
        languageFlag(lingua) {
            if (dataShared.languageFlags.includes(lingua)) {
                this.flag = dataShared.flags[lingua];
            } else {
                this.flag = '';
            }
        },
    }

}
</script>

<style lang="scss" scoped>
.card {
    > img {
        height: 16px;
    }
}
</style>