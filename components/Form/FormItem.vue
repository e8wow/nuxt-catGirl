<template>
    <div :class="prefixCls">
        <slot></slot>
        <p :class="errorClasses"> {{message}}</p>
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
            message: String,
            messageType: String
        },
        computed: {
            errorClasses() {
                return [
                    `${this.prefixCls}-msg`,
                    this.messageType,
                    `i-cat-girl i-cat-girl-${this.messageType}`,
                    { 'visibility-hidden': !this.message }
                ]
            }
        }
    }
</script>

<style lang="less">
    @import url('../../assets/styles/base');

    @prefixCls: cat-form-item;
    .@{prefixCls} {
        &-msg {
            margin: 0;
            color: #910782;
            height: 32px;
            line-height: 32px;
            text-align: center;
        }
        .error {
            color: #910782;
        }
        .success {
            color: #1eaa39;
        }
    }
</style>
