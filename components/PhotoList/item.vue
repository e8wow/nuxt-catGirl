<template>
    <li :class="`${prefixCls}-container`">
        <div>
            <img style="width: 100%" :src="data.photo">
        </div>
        <div :class="[`${prefixCls}-footer`, type]">
            <slot name="footer"></slot>
            <!--<div :class="`${prefixCls}-footer-info`">-->
            <!--<var>-->
            <!--<i class="i-cat-girl i-cat-girl-clock"></i>-->
            <!--<span>2018-11-14</span>-->
            <!--</var>-->
            <!--<var>-->
            <!--<i class="i-cat-girl i-cat-girl-love"></i>-->
            <!--<span>666</span>-->
            <!--</var>-->
            <!--</div>-->
            <!--<div v-if="type === 'contract'" class="oh1" :class="`${prefixCls}-footer-contract`">-->
            <!--<span>已出售：</span>{{data.contract}}-->
            <!--</div>-->
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
    }

    @media (min-width: @screen-md-min) {
        .@{prefixCls} {
            &-container {
                flex: 0 0 25%;
            }
        }
    }
</style>
