<template>
    <div>
        <navigation></navigation>
        <div class="default-layout-body">
            <p class="notice">公告：本站目前正在使用域名 www.catgirlmm.com 永久域名：www.catgirl.com</p>
            <nuxt/>
        </div>
    </div>
</template>

<script>
    import navigation from '../components/navigation'

    export default {
        components: {navigation}
    }
</script>


<style lang="less">
    @import url('../assets/styles/base');

    .default-layout-body {
        margin: 45px 0 0 0;
    }

    .notice {
        background: #f5f4f5;
        color: #bbb;
        margin: 0;
        line-height: 2;
        font-size: 12px;
        padding: 0 15px;
    }

    @media (min-width: @screen-md-min) {
        .notice {
            background: #f5f4f5;
            color: #bbb;
            margin: 0;
            line-height: 2;
            font-size: 12px;
            padding: 0 @container-gutter;
        }
    }
</style>
