<template>
    <div :class="prefixCls">
        <user-info></user-info>
        <ul :class="`${prefixCls}-menu`">
            <li>
                <span>充值中心</span>
                <nuxt-link to="/">进入查看 >></nuxt-link>
            </li>
            <li>
                <span>充值记录</span>
                <nuxt-link to="/">进入查看 >></nuxt-link>
            </li>
            <li>
                <span>购买记录</span>
                <nuxt-link to="/">进入查看 >></nuxt-link>
            </li>
            <li>
                <span>会员资料</span>
                <nuxt-link to="/">修改 >></nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import UserInfo from '../../components/UserInfo/index'

    export default {
        name: 'user-center',
        components: { UserInfo },
        props: {
            prefixCls: {
                type: String,
                default: 'pg-user-center'
            }
        }
    }
</script>

<style lang="less">
    @import "../../assets/styles/base";

    @prefixCls: pg-user-center;
    .@{prefixCls} {
        padding: 20px;
        &-menu {
            display: flex;
            align-items: center;
            flex-flow: column;
            padding: 0;
            margin: 20px 0 0 0;
            list-style-type: none;
            li {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 10px;
                width: 90%;
                height: 40px;
                border-top: 1px solid #ddd;
                color: #999;
                &:last-child {
                    border-bottom: 1px solid #ddd;
                }
            }
        }
    }

    @media (min-width: @screen-md-min) {
        .@{prefixCls} {
            &-menu {
                margin: 40px 0 0 0;
                li {
                    width: 60%;
                    height: 50px;
                }
            }
        }
    }
</style>
