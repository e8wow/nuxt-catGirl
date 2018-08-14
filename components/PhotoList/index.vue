<template>
    <div :class="`${prefixCls}-container`">
        <ul :class="prefixCls">
            <slot></slot>
        </ul>
    </div>
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
    padding: 0 5px;
    margin: 0;
}
</style>
