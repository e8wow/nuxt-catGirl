<template>
    <div :class="prefixCls">
        <slot></slot>
        <div :class="`${this.prefixCls}-message`">
            <slot name="message"></slot>
            <p v-if="!$slots.message" :class="errorClasses"> {{message}}</p>
        </div>
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
        p {
            margin: 0;
        }
        &-message {
            margin: 0;
            height: 26px;
            line-height: 26px;
        }
        .error {
            color: #910782;
            text-align: center;
        }
        .success {
            color: #1eaa39;
            text-align: center;
        }
    }

    @media (min-width: @screen-md-min) {
        .@{prefixCls} {
            &-message {
                height: 32px;
                line-height: 32px;
            }
        }
    }
</style>
