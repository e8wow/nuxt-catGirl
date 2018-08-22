<template>
    <div :class="prefixCls">
        <div class="main">
            <div class="main-wrap col-xs-12 col-md-7">
                <div class="main-photo">
                    <img src="../static/sucai.png" alt="">
                </div>
                <div class="info">
                    <var>
                        <i class="i-cat-girl i-cat-girl-clock"></i>
                        <span> 2018-11-14</span>
                    </var>
                    <var>
                        <i class="i-cat-girl i-cat-girl-love"></i>
                        <span> 666</span>
                    </var>
                </div>
            </div>
            <div class="photo-wrap col-xs-12 col-md-5 hidden-xs hidden-sm">
                <div class="translation">
                    <div v-for="i in 20" :key="i" class="item col-xs-12 col-md-3">
                        <img src="../static/sucai.png" alt="">
                    </div>
                </div>
                <div class="download-container">
                    <a class="download">下载</a>
                    <a class="buy">
                        <p>专辑售价1金币</p>
                        <p class="tips">点击下载将自动扣除相应金币并开始下载</p>
                    </a>
                </div>
            </div>
        </div>
        <h2 class="dividing">
            <span>你可能还喜欢</span>
        </h2>
        <photo-list>
            <photo-list-item v-for="item in fakerData"
                             :data="item"
                             :key="item.id">
                <footer-default slot="footer"/>
            </photo-list-item>
        </photo-list>
    </div>
</template>

<script>
    import { PhotoList, PhotoListItem, FooterDefault } from '../components/PhotoList'

    export default {
        name: 'pg-detail',
        components: { PhotoList, PhotoListItem, FooterDefault },
        props: {
            prefixCls: {
                type: String,
                default: 'pg-detail'
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

    @prefixCls: pg-detail;
    .@{prefixCls} {
        padding: 15px;
        .dividing {
            display: flex;
            align-items: center;
            font-size: 18px;
            span {
                margin: 0 15px;
            }
            &::before {
                flex: 1;
                content: '';
                height: 1px;
                background: #ddd;
            }
            &::after {
                flex: 1;
                content: '';
                height: 1px;
                background: #ddd;
            }
        }
        > .main {
            display: flex;
        }
        .main-wrap {
            display: flex;
            flex-flow: column;
            .main-photo {
                border: 1px solid #ddd;
                flex: 1;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .info {
                display: flex;
                align-items: center;
                flex: 0 50px;
                background: #ddd;
                height: 50px;
                margin: 20px 0 0 0;
                var {
                    margin: 0 0 0 15px;
                }
            }
        }

        .download-container {
            margin: 20px 0 0 0;
            display: flex;
            flex: 1;
            padding: 0 15px;
        }
    }

    @media (min-width: @screen-md-min) {
        .@{prefixCls} {
            .dividing {
                font-size: 28px;
            }
            .photo-wrap {
                display: flex;
                flex-flow: column wrap;
                padding: 0;
                .translation {
                    flex: 1;
                }
                .item {
                    padding: 5px;
                    img {
                        width: 100%;
                    }
                }
            }

            .info {
                display: flex;
                align-items: center;
                flex: 0 0 50px;
                background: #ddd;
                var {
                    margin: 0 0 0 15px;
                }
            }
            .download-container {
                display: flex;
                flex: 0 0 50px;
                padding: 0;
                margin: 0 -5px;
                .download {
                    background: @primary-color;
                    color: #fff;
                }
                .buy {
                    background: #ddd;
                }
                a {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-flow: column;
                    border: none;
                    padding: 0 15px;
                    margin: 0 5px;
                }
                p {
                    margin: 0;
                }
                .tips {
                    font-size: 12px;
                    color: #999;
                }
            }
        }
    }
</style>
