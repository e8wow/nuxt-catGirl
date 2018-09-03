<template>
    <div :class="`${prefixCls}-wrap`">
        <ul class="nav nav-tabs hidden-md hidden-lg">
            <li role="presentation" :class="{active: tab === 'profile'}"><a @click.prevent="tab = 'profile'">个人信息</a>
            </li>
            <li role="presentation" :class="{active: tab === 'changePassword'}"><a
                @click.prevent="tab = 'changePassword'">修改密码</a></li>
            <li role="presentation" :class="{active: tab === 'changePasswordTool'}"><a
                @click.prevent="tab = 'changePasswordTool'">修改密保工具</a></li>
        </ul>
        <div class="profile-wrap col-xs-12 col-md-6" :class="{'hidden-xs hidden-sm': tab !== 'profile'}">
            <ul>
                <li>
                    <div class="profile">
                        <img class="avatar" src="https://static.hdslb.com/images/member/noface.gif" alt="">
                        <h2>木偶猪猪</h2>
                    </div>
                </li>
                <li>
                    剩余会员天数：1001天
                </li>
                <li>
                    剩余金币数量：20000
                </li>
                <li>
                    绑定手机号码：15988888888
                </li>
                <li>
                    绑定邮箱地址：353742991@qq.com
                </li>
                <li>
                    <textarea></textarea>
                </li>
            </ul>
        </div>
        <div class="password-wrap col-xs-12 col-md-6" :class="{'hidden-xs hidden-sm': tab !== 'changePassword'}">
            <h3>密码修改</h3>
            <Form>
                <FormItem>
                    <Input full
                           placeholder="原密码"/>
                </FormItem>
                <FormItem>
                    <Input full
                           placeholder="输入新密码"/>
                    <p class="message" slot="message">
                        <span class="hidden-xs hidden-sm">如不需要修改密码，此处请留空</span>
                        <span class="i-cat-girl i-cat-girl-error error-message"> {{ 1 }}</span>
                    </p>
                </FormItem>
                <FormItem>
                    <Input full
                           placeholder="确认新密码"/>
                    <p class="message" slot="message">
                        <span class="hidden-xs hidden-sm">如不需要修改密码，此处请留空</span>
                        <span class="i-cat-girl i-cat-girl-error error-message"> {{ 1 }}</span>
                    </p>
                </FormItem>
            </Form>
        </div>
        <div class="password-tool-wrap col-xs-12 col-md-6"
             :class="{'hidden-xs hidden-sm': tab !== 'changePasswordTool'}">
            <h3>密保工具修改</h3>
            <Form>
                <FormItem>
                    <Input full
                           placeholder="输入手机号"/>
                </FormItem>
                <FormItem>
                    <Input full
                           placeholder="输入邮箱地址"/>
                </FormItem>
                <FormItem>
                    <Input placeholder="输入验证码"/>
                </FormItem>
            </Form>
        </div>
        <div class="options">
            <div>
                <CatButton full>修改</CatButton>
                <CatButton class="cancel-btn" full>取消</CatButton>
            </div>
        </div>
    </div>
</template>

<script>
    import Input              from '../../components/Input'
    import { Form, FormItem } from '../../components/Form'
    import CatButton          from '../../components/Button'

    export default {
        name: 'pg-user-profile',
        components: {
            CatButton,
            Input,
            Form, FormItem
        },
        props: {
            prefixCls: {
                type: String,
                default: 'pg-user-profile'
            }
        },
        data() {
            return {
                tab: 'changePassword'
            }
        }
    }
</script>

<style lang="less">
    @import "../../assets/styles/base";

    @prefixCls: pg-user-profile;
    .@{prefixCls}-wrap {
        .avatar {
            border-radius: 50%;
            overflow: hidden;
            border: 1px solid #ddd;
            width: 50px;
        }
        .profile-wrap {
            padding: 20px;
            ul {
                margin: 0;
                padding: 0;
                list-style-type: none;
            }
            li {
                display: flex;
                border-bottom: 1px solid #ddd;
                min-height: 30px;
                padding: 10px;
            }
            .profile {
                display: flex;
                align-items: center;
                h2 {
                    margin: 0 0 0 10px;
                    font-size: 22px;
                }
            }
            textarea {
                flex: 1;
                height: 200px;
                border: 1px solid #ddd;
                margin: 0 -5px;
                padding: 10px;
                outline: none;
            }
        }
        .password-wrap {
            padding: 20px;
            h3 {
                margin: 0 0 15px;
            }
            .message {
                display: flex;
                justify-content: space-between;
                .error-message {
                    color: #910782;
                    flex: 1;
                    text-align: center;
                }
            }
        }
        .password-tool-wrap {
            padding: 20px;
            h3 {
                margin: 0 0 15px;
            }
        }
        .options {
            padding: 0 20px;
            .cancel-btn {
                background: #ddd;
                color: #000;
                margin: 20px 0;
            }
        }
    }

    @media (min-width: @screen-md-min) {
        .@{prefixCls}-wrap {
            border: 1px solid #ddd;
            box-shadow: 0 0 15px #ddd;
            width: 1000px;
            padding: 0 20px;
            margin: 50px auto;
            overflow: hidden;
            transition: all 300ms ease-in-out;
            &:hover {
                border-color: @primary-color;
                box-shadow: 0 0 15px @primary-color;
            }
            .password-wrap {
                .message {
                    display: flex;
                    justify-content: space-between;
                    .error-message {
                        color: #910782;
                        flex: 0 auto;
                    }
                }
            }
            .options {
                padding: 0;
                .cat-button {
                    height: 40px;
                    font-size: 18px;
                }
            }
        }
    }
</style>
