<template>
    <button @click="handleClick" :class="buttonClasses">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'cat-button',
        props: {
            prefixCls: {
                type: String,
                default: 'cat-button'
            },
            full: Boolean
        },
        computed: {
            buttonClasses() {
                return [
                    this.prefixCls,
                    { full: this.full }
                ]
            }
        },
        methods: {
            handleClick(e) {
                this.$emit('click', e)
            }
        }
    }
</script>

<style lang="less">
    @import "../../assets/styles/base";

    @prefixCls: cat-button;
    .@{prefixCls} {
        background: @primary-color;
        border-radius: 6px;
        color: #fff;
        border: none;
        outline: none;
        height: 32px;
        &:active {
            opacity: .8;
        }
        &.full {
            width: 100%;
        }
    }
</style>
