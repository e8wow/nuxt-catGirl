<template>
    <input type="text"
           class="cat-input"
           @input="handleInput"
           v-bind="$attrs"
           :class="{full}"
           :value="value">
</template>
<script>
    export default {
        name: 'cat-input',
        props: {
            value: String,
            full: Boolean
        },
        methods: {
            handleInput(e) {
                this.$emit('input', e.target.value)
            }
        }
    }
</script>
<style lang="less">
    @import url('../../assets/styles/base');

    @prefixCls: cat-input;
    .@{prefixCls} {
        padding: 5px 10px;
        border-radius: 6px;
        outline: none;
        border: 1px solid #ddd;
        transition: all 300ms ease-in-out;
        caret-color: @primary-color;
        &:focus {
            border-color: @primary-color;
            box-shadow: 0 0 5px @primary-color;
        }
        &.full {
            width: 100%;
        }
    }

</style>
