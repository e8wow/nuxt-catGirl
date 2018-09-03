<template>
    <div :class="prefixCls">
        <div>购买时间： 2018-05-12</div>
        <div>消费： 1金币</div>
    </div>
</template>

<script>
    export default {
        name: 'buy-record',
        props: {
            prefixCls: {
                type: String,
                default: 'buy-record'
            }
        }
    }
</script>

<style lang="less">
    @import "../../../assets/styles/base";

    @prefixCls: buy-record;
    .@{prefixCls} {
        display: flex;
        justify-content: space-between;
        background: #f5f5f5;
        padding: 5px 10px;
    }
</style>
