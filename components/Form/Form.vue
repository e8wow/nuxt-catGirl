<template>
    <form :class="prefixCls" onsubmit="return false">
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name: 'form',
        props: {
            prefixCls: {
                type: String,
                default: 'cat-form'
            }
        }
    }
</script>

<style lang="less">

</style>
