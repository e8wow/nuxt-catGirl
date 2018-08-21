<template>
    <div :class="prefixCls">
        <div :class="`${prefixCls}-left`">
            <var>
                <i class="i-cat-girl i-cat-girl-clock"></i>
                <span>2018-11-14</span>
            </var>
            <var>
                <i class="i-cat-girl i-cat-girl-love"></i>
                <span>666</span>
            </var>
        </div>
        <div :class="`${prefixCls}-right`" class="oh1">
            <span>已出售：</span>{{data.contract}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'contract',
        props: {
            data: Object,
            prefixCls: {
                type: String,
                default: 'photo-list-item-footer-contract'
            }
        }
    }
</script>

<style lang="less">
    @import "../../../assets/styles/base";

    @prefixCls: photo-list-item-footer-contract;
    .@{prefixCls} {
        display: flex;
        flex-wrap: wrap;
        font-size: 15px;
        align-items: center;
        &-left {
            display: flex;
            flex-flow: row wrap;
            margin: 5px 0;
        }
        var {
            flex: 0 0 100%;
            font-style: normal;
            margin: 0 10px 0 0;display: flex;
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
            span {
                margin: 0 0 0 5px;
            }
        }
        &-right {
            flex: 0 0 100%;
            color: @primary-color;
            height: 20px;
            line-height: 20px;
        }
    }

    @media (min-width: @screen-md-min) {
        .@{prefixCls} {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-flow: row nowrap;
            &-left {
                flex-flow: row nowrap;
                justify-content: flex-start;
                flex: 0 0 auto;
            }
            var {
                flex: 0 0 auto;
            }

            &-contract {
                flex: 0 1 auto;
                text-align: left;
            }
            &-right {
                flex: 0 1 auto;
                text-align: left;
            }
        }
    }
</style>
