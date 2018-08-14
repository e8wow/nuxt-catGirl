<template>
    <ul :class="prefixCls">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: 'photo-list',
        props: {
            prefixCls: {
                type: String,
                default: 'photo-list'
            }
        }
    }
</script>

<style lang="less">
    @prefixCls: photo-list;
    .@{prefixCls} {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
    }
</style>
