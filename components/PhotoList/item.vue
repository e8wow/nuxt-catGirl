<template>
    <li :class="`${prefixCls}-container`">
        <div :class="`${prefixCls}-body`">
            <img style="width: 100%" :src="data.photo">
            <slot name="body"></slot>
        </div>
        <div :class="[`${prefixCls}-footer`, type]">
            <slot name="footer"></slot>
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
            padding: 0 5px;
            list-style-type: none;
            overflow: hidden;
        }
        &-body {
            position: relative;
        }
    }

    @media (min-width: @screen-md-min) {
        .@{prefixCls} {
            &-container {
                flex: 0 0 25%;
            }
        }
    }
</style>
