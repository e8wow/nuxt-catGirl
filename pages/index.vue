<template>
    <section :class="prefixCls">
        <section :class="`${prefixCls}-banner-wrap`">
            <div v-swiper:mySwiper="swiperOption" class="swiper-container" :class="`${prefixCls}-banner`">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="i in 10" :key="i">
                        <p>{{i}}</p>
                        <p>{{i}}</p>
                        <p>{{i}}</p>
                        <p>{{i}}</p>
                        <p>{{i}}</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <photo-list>
                <photo-list-item v-for="i in 8" :key="i"
                                 photo="/sucai.png"></photo-list-item>
            </photo-list>
        </section>
    </section>
</template>

<script>
    import {PhotoList, PhotoListItem} from '../components/PhotoList/index.js'

    export default {
        components: {
            PhotoList,
            PhotoListItem
        },
        data() {
            return {
                swiperOption: {}
            }
        },
        props: {
            prefixCls: {
                type: String,
                default: 'pg-index'
            }
        }
    }
</script>

<style lang="less">
    @import url('../assets/styles/base');

    @prefixCls: pg-index;
    .@{prefixCls} {
        &-banner-wrap {
            padding: 20px 15px;
        }
        &-banner {
            background: #bbb;
        }
    }

    @media (min-width: @screen-md-min) {
        &-banner-wrap {
            padding: 40px 30px;
        }
    }
</style>

