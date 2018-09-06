<template>
    <div :class="prefixCls">
        <order :order="order"/>
        <photo-list>
            <photo-list-item v-for="item in fakerData"
                             :data="item"
                             :key="item.id">
                <footer-default slot="footer"/>
            </photo-list-item>
        </photo-list>
        <copyright-notice/>
    </div>
</template>

<script>
    import { FooterDefault, PhotoList, PhotoListItem } from '../components/PhotoList'
    import Order                                       from '../components/Order'
    import CopyrightNotice                             from '../components/CopyrightNotice'

    export default {
        name: 'photo',
        components: { CopyrightNotice, Order, PhotoListItem, PhotoList, FooterDefault },
        props: {
            prefixCls: {
                type: String,
                default: 'pg-photo'
            }
        },
        data() {
            return {
                order: {
                    isShow: false,
                    orderField: '',
                    data: [
                        {
                            field: '',
                            text: '最新'
                        },
                        {
                            field: 'hot',
                            text: '最热'
                        },
                        {
                            field: 'recommend',
                            text: '推荐'
                        }
                    ]
                },
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

    @prefixCls: pg-photo;
    .@{prefixCls} {
        padding: 20px;
        .order {
            display: flex;
            justify-content: flex-end;
        }
    }

    @media (min-width: @screen-md-min) {
        .@{prefixCls} {
            .order {
                display: flex;
                justify-content: flex-start;
            }
        }
    }
</style>
