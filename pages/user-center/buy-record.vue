<template>
    <div :class="prefixCls">
        <user-info></user-info>
        <h2>已购买</h2>
        <hr>
        <div v-if="!fakerData.length" class="no-more">
            暂无记录
        </div>
        <PhotoList v-else>
            <photo-list-item v-for="item in fakerData"
                             :data="item"
                             :key="item.id">
                <buy-record slot="footer"></buy-record>
            </photo-list-item>
        </PhotoList>
    </div>
</template>

<script>
    import UserInfo                                from '../../components/UserInfo'
    import { PhotoList, PhotoListItem, BuyRecord } from '../../components/PhotoList'

    export default {
        name: 'pg-buy-record',
        components: { BuyRecord, PhotoListItem, PhotoList, UserInfo },
        props: {
            prefixCls: {
                type: String,
                default: 'pg-buy-record'
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
    @import "../../assets/styles/base";

    @prefixCls: pg-buy-record;
    .@{prefixCls} {
        .user-info {
            margin: 30px 0;
        }
        .no-more {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        h2 {
            color: @primary-color;
            font-size: 16px;
            padding: 0 0 0 15px;
        }
    }
</style>
