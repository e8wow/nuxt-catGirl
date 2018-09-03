<template>
    <div :class="prefixCls">
        <div :class="[`${prefixCls}-header`, {hasOrder}]">
            <h2>{{title}}</h2>
            <div :class="`${prefixCls}-header-container`">
                <div v-if="hasOrder" :class="`${prefixCls}-order`">
                    <span class="hidden-md hidden-lg" @click="order.isShow = !order.isShow">排序 <span
                        class="i-cat-girl i-cat-girl-order"></span></span>
                    <ul :class="{'hidden-xs': !order.isShow, 'hidden-sm': !order.isShow}">
                        <li v-for="item in order.data"
                            :key="item.field"
                            @click.stop="orderBy(item.field)"
                            :class="{active: order.orderField === item.field}">
                            <a>{{item.text}}</a>
                        </li>
                    </ul>
                </div>
                <div v-else></div>
                <div :class="`${prefixCls}-more`">
                    <slot name="more"></slot>
                </div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'container',
        props: {
            prefixCls: {
                type: String,
                default: 'photo-list-container'
            },
            title: String,
            hasOrder: Boolean,
            orderField: {
                type: String,
                default: ''
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
                }
            }
        },
        created() {
            this.order.orderField = this.orderField
        },
        methods: {
            orderBy(field) {
                this.$emit('order', field)
                this.order.orderField = field
                this.order.isShow = false
            }
        },
        watch: {
            orderField: {
                immediate: true,
                handler(newValue) {
                    this.order.orderField = newValue
                }
            }
        }
    }
</script>

<style lang="less">
    @import "../../assets/styles/base";

    @prefixCls: photo-list-container;
    .@{prefixCls} {
        background: #f2f2f2;
        padding: 15px;
        a {
            color: #000;
            text-decoration: none;
            &:hover {
                cursor: pointer;
            }
        }
        &-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            h2 {
                margin: 0;
                font-size: 24px;
                font-weight: normal;
            }
        }
        &-header-container {
            display: flex;
            align-items: center;
        }
        &-order {
            position: relative;
            z-index: 100;
            ul {
                position: absolute;
                top: 100%;
                right: 0;
                background: #fff;
                list-style-type: none;
                padding: 0;
                margin: 0;
                width: 100px;
                border-radius: 5px;
                box-shadow: 0 0 10px #ddd;
                li {
                    line-height: 2.2;
                    padding: 5px 10px;
                    &:active {
                        background: #f5f5f5;
                    }
                }
            }
        }
        &-more {
            margin: 0 0 0 15px;
        }
    }

    @media (min-width: @screen-md-min) {
        .@{prefixCls} {
            &-header {
                justify-content: flex-start;
                h2 {
                    font-size: 30px;
                }
            }
            &-header-container {
                flex: 1;
                justify-content: space-between;
            }
            &-order {
                ul {
                    display: flex;
                    position: relative;
                    top: 0;
                    right: 0;
                    background: transparent;
                    width: auto;
                    border-radius: 0;
                    margin: 0 0 0 20px;
                    box-shadow: none;
                    li {
                        position: relative;
                        padding: 0;
                        &.active::before {
                            position: absolute;
                            content: '';
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            border: 1px solid #888;
                        }
                        & + li {
                            margin: 0 0 0 20px;
                        }
                        &:active {
                            background: transparent;
                        }
                    }
                }
            }
        }
    }
</style>
