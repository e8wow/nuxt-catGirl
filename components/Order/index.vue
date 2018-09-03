<template>
    <div class="order">
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
</template>

<script>
    export default {
        name: 'order',
        props: {
            order: {}
        }
    }
</script>

<style lang="less">
    @import "../../assets/styles/base";
    .order {
        position: relative;
        z-index: 100;
        display: inline-flex;
        ul {
            position: absolute;
            top: 100%;
            right: 0;
            list-style-type: none;
            margin: 0;
            padding: 0;
            background: #fff;
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

    @media (min-width: @screen-md-min) {
        .order {
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
</style>
