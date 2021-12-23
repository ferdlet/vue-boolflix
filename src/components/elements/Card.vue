<template>
    <div class="card">
        <div class="container-card">
            <img class="poster" v-if="info.poster_path" :src="'https://image.tmdb.org/t/p/w342/' + info.poster_path" :alt="info.name || info.title">
            <div class="no-poster" v-else>
                <span>Nessuna copertina disponibile</span>
            </div>
            <div class="item-info">
                <h3 v-if="info.title || info.name"> Titolo: <mark>{{info.title || info.name}}</mark></h3>
                <h3>Titolo originale: <mark>{{info.original_title || info.original_name}}</mark></h3>
                <div class="voto" v-if="Math.ceil(info.vote_average / 2) > 0">
                    <strong>Voto: </strong>
                    <span class="star" v-for="(stella, j) in Math.ceil(info.vote_average / 2)" :key="j">
                        &#9733;
                    </span>
                </div>
                <div class="language">
                    <strong>Lingua </strong>
                    <img class="flag-language" v-if="dataShared.languageFlags.includes(info.original_language)" :lingua="languageFlag(info.original_language)" :src="flag" :alt="info.original_language">
                    <span class="text-language" v-else>{{info.original_language}}</span>
                </div>
                <p class="descrizione" v-if="info.overview">
                    <strong>Descrizione:</strong>
                    {{info.overview}}
                </p>
            </div>
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
@import '../../assets/style/global.scss';

.card {
    overflow: hidden;
    font-size: 14px;
    aspect-ratio: 2/3;

    .container-card {
        position: relative;
        height: 100%;
        width: 100%;
    }
    .flag-language {
        height: 16px;
    }
    .item-info {
        display: none;
        
    }
    .poster {
        height: 100%;
    }
    &:hover {
        .poster {
            display: block;
            scale: 1.1;
        }
        .item-info{
            > * {
                margin-top: 8px;
                margin-bottom: 8px;
            }
            mark {
                font-weight: 500;
                background: transparent;
                color: white;
            }
            background: rgba($color: #000, $alpha: 0.7);
            padding: 15px;
            display: block;
            position: absolute;
            z-index: 9999;
            top: 0;
            left: 0;
            color: white;
            max-height: 100%;
            overflow-y: auto;
            height: 100%;
            width: 100%;
            .voto {
                strong {
                    margin-right: 10px;
                }
            }
            .text-language {
                text-transform: uppercase;
            }
            .language {
                strong {
                    margin-right: 10px;
                }
                display: flex;
                align-items: center;
            }
            .star {
                color: yellow;
            }
            .descrizione {
                text-align: justify;
            }
        }
    }
    .no-poster {
        // height: 420px; // da sistemare
        aspect-ratio: 2/3;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid white;
        span {
            transform: rotate(-45deg);
            color: white;
        }
    }
}
</style>