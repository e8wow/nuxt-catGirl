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
            <container title="Cosplayer写真" hasOrder>
                <router-link slot="more" to="/">查看更多</router-link>
                <photo-list>
                    <photo-list-item v-for="item in fakerData"
                                     :data="item"
                                     :key="item.id">
                        <footer-default slot="footer"/>
                    </photo-list-item>
                </photo-list>
            </container>

            <container style="margin-top: 20px" title="Cosplayer视频" hasOrder>
                <router-link slot="more" to="/">查看更多</router-link>
                <photo-list>
                    <photo-list-item v-for="item in fakerData"
                                     :data="item"
                                     :key="item.id">
                        <footer-default slot="footer"/>
                    </photo-list-item>
                </photo-list>
            </container>

            <container style="margin-top: 20px" title="私人专属">
                <photo-list>
                    <photo-list-item v-for="item in fakerData"
                                     :data="item"
                                     :key="item.id">
                        <i slot="body" class="i-cat-girl i-cat-girl-huangguan"></i>
                        <footer-contract slot="footer" :data="item"/>
                    </photo-list-item>
                </photo-list>
            </container>
        </section>
        <copyright-notice></copyright-notice>
    </section>
</template>

<script>
    import CopyrightNotice from '../components/CopyrightNotice'
    import {
        Container,
        PhotoList, PhotoListItem,
        FooterContract, FooterDefault
    }                      from '../components/PhotoList'

    export default {
        components: {
            CopyrightNotice,
            Container,
            PhotoList, PhotoListItem,
            FooterContract, FooterDefault
        },
        data() {
            return {
                swiperOption: {},
                fakerData: [ {
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
                } ]
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
        .i-cat-girl-huangguan {
            position: absolute;
            bottom: -10px;
            right: 5px;
            color: @primary-color;
            font-size: 40px;
        }
    }

    @media (min-width: @screen-md-min) {
        &-banner-wrap {
            padding: 40px 30px;
        }

    }
</style>

