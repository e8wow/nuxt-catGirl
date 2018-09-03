<template>
    <div :class="prefixCls">
        <photo-list>
            <photo-list-item v-for="item in fakerData"
                             :data="item"
                             :key="item.id">
                <i slot="body" class="i-cat-girl i-cat-girl-huangguan"></i>
                <footer-contract slot="footer" :data="item"/>
            </photo-list-item>
        </photo-list>
    </div>
</template>

<script>
    import { PhotoList, PhotoListItem, FooterContract } from '../components/PhotoList'

    export default {
        name: 'exclusive',
        components: { PhotoList, PhotoListItem, FooterContract },
        props: {
            prefixCls: {
                type: String,
                default: 'exclusive'
            }
        },
        data() {
            return {
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
        }
    }
</script>

<style lang="less">
    @import "../assets/styles/base";

    @prefixCls: exclusive;
    .@{prefixCls} {
        .i-cat-girl-huangguan {
            position: absolute;
            bottom: -10px;
            right: 5px;
            color: @primary-color;
            font-size: 40px;
        }
    }
</style>
