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
                <photo-list-item v-for="item in fakerData"
                                 :data="item"
                                 type="contract"
                                 :key="item.id"/>
            </photo-list>
        </section>
    </section>
</template>

<script>
    import {PhotoList, PhotoListItem} from '../components/PhotoList'

    export default {
        components: {
            PhotoList,
            PhotoListItem
        },
        data() {
            return {
                swiperOption: {},
                fakerData: [{
                    id: 1,
                    photo: '/sucai.png',
                    contract: 'Jelf'
                }, {
                    id: 2,
                    photo: '/sucai.png',
                    contract: 'Jelf1'
                }, {
                    id: 3,
                    photo: '/sucai.png',
                    contract: 'Jel2'
                }, {
                    id: 4,
                    photo: '/sucai.png',
                    contract: '唐伯虎点秋香'
                }, {
                    id: 5,
                    photo: '/sucai.png',
                    contract: '唐伯虎点秋香'
                }, {
                    id: 6,
                    photo: '/sucai.png',
                    contract: 'zoe'
                }, {
                    id: 7,
                    photo: '/sucai.png',
                    contract: '唐伯虎点秋香'
                }, {
                    id: 8,
                    photo: '/sucai.png',
                    contract: '唐伯虎点秋香'
                }]
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

