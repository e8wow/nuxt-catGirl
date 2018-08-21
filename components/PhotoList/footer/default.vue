<template>
    <div :class="prefixCls">
        <div :class="`${prefixCls}-info`">
            <var>
                <i class="i-cat-girl i-cat-girl-clock"></i>
                <span>2018-11-14</span>
            </var>
            <var>
                <i class="i-cat-girl i-cat-girl-love"></i>
                <span>666</span>
            </var>
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
                default: 'photo-list-item-footer-default'
            }
        }
    }
</script>

<style lang="less">
    @import "../../../assets/styles/base";

    @prefixCls: photo-list-item-footer-default;
    .@{prefixCls} {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: row nowrap;
        &-info {
            display: flex;
            flex-flow: row wrap;
            margin: 5px 0;
        }
        var {
            font-style: normal;
            margin: 0 10px 0 0;
            span {
                margin: 0 0 0 5px;
            }
        }
    }
</style>
