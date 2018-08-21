<template>
    <div :class="prefixCls">
        <img class="avatar" src="https://static.hdslb.com/images/member/noface.gif">
        <div class="user-profile">
            <h2 class="user-profile-username">木偶猪猪</h2>
            <p><var>1001</var>天 <var>20000</var>金币</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'user-info',
        props: {
            prefixCls: {
                type: String,
                default: 'user-info'
            }
        }
    }
</script>

<style lang="less">
    @import "../../assets/styles/base";

    @prefixCls: user-info;
    .@{prefixCls} {
        display: flex;
        justify-content: center;
        align-items: center;
        .avatar {
            width: 60px;
            border-radius: 50%;
            border: 2px solid #fff;
            overflow: hidden;
            margin-right: 10px;
        }
        .user-profile {
            &-username {
                font-size: 16px;
            }
            p {
                color: rgba(0, 0, 0, .7);
            }
            var {
                color: @primary-color;
            }
        }
    }

    @media (min-width: @screen-md-min) {
        .@{prefixCls} {
            .avatar {
                width: 80px;
                margin-right: 20px;
            }
            .user-profile {
                &-username {
                    font-size: 20px;
                }
            }
        }
    }
</style>
