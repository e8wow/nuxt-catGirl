<template>
    <li :class="`${prefixCls}-container`">
        <div>
            <img style="width: 100%" :src="data.photo">
        </div>
        <div :class="[`${prefixCls}-footer`, type]">
            <div :class="`${prefixCls}-footer-info`">
                <var>
                    <i class="i-cat-girl i-cat-girl-clock"></i>
                    <span>2018-11-14</span>
                </var>
                <var>
                    <i class="i-cat-girl i-cat-girl-love"></i>
                    <span>666</span>
                </var>
            </div>
            <div v-if="type === 'contract'" class="oh1" :class="`${prefixCls}-footer-contract`">
                <span>已出售：</span>{{data.contract}}
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'photo-list-item',
        props: {
            prefixCls: {
                type: String,
                default: 'photo-list-item'
            },
            type: String,
            data: {
                required: true,
                type: Object
            }
        }
    }
</script>

<style lang="less">
    @import '../../assets/styles/base';

    @prefixCls: photo-list-item;
    .@{prefixCls} {
        &-container {
            flex: 0 0 50%;
            margin: 15px 0 0 0;
            padding: 0 10px;
            list-style-type: none;
            overflow: hidden;
        }
        &-footer {
            display: flex;
            flex-wrap: wrap;
            font-size: 15px;
            align-items: center;
            &-info {
                display: flex;
                flex-flow: row wrap;
                margin: 5px 0;
            }
            var {
                flex: 0 0 100%;
                font-style: normal;
                margin: 0 10px 0 0;
                span {
                    margin: 0 0 0 5px;
                }
            }
            &-contract {
                flex: 0 0 100%;
                color: @primary-color;
                height: 20px;
                line-height: 20px;
            }
        }
    }

    @media (min-width: @screen-md-min) {
        .@{prefixCls} {
            &-container {
                flex: 0 0 25%;
            }
            &-footer {
                align-items: center;
                &-info {
                    flex: 1;
                    flex-flow: row nowrap;
                    justify-content: center;
                }
                var {
                    flex: 0 0 auto;
                }

                &-contract {
                    flex: 0 1 auto;
                    text-align: left;
                }
            }
            &-footer.contract {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-flow: row nowrap;
                .@{prefixCls}-footer-info {
                    justify-content: flex-start;
                    flex: 0 0 auto;
                }
            }
        }
    }
</style>
