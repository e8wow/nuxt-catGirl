<template>
    <div :class="prefixCls">
        <slot></slot>
        <p :class="errorClasses"> {{errorMsg}}</p>
    </div>
</template>

<script>
    export default {
        name: 'form-item',
        props: {
            prefixCls: {
                type: String,
                default: 'cat-form-item'
            },
            errorMsg: String
        },
        computed: {
            errorClasses() {
                return [
                    `${this.prefixCls}-error`,
                    'i-cat-girl i-cat-girl-error',
                    { 'visibility-hidden': !this.errorMsg }
                ]
            }
        }
    }
</script>

<style lang="less">
    @import url('../../assets/styles/base');

    @prefixCls: cat-form-item;
    .@{prefixCls} {
        &-error {
            margin: 0;
            color: #910782;
            height: 32px;
            line-height: 32px;
            text-align: center;
        }
    }
</style>
