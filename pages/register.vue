<template>
    <div>
        <div :class="`${prefixCls}-container`">
            <Form :class="prefixCls">
                <FormItem :message="username.message"
                          :messageType="username.messageType">
                    <Input v-model="username.value"
                           @blur.native="checkUsername"
                           full
                           placeholder="账号"/>
                </FormItem>
                <FormItem :message="password.message"
                          messageType="error">
                    <Input v-model="password.value"
                           @blur.native="checkPassword"
                           type="password"
                           full
                           placeholder="输入密码"/>
                </FormItem>
                <FormItem :message="confirmPassword.message"
                          messageType="error">
                    <Input v-model="confirmPassword.value"
                           @blur.native="checkConfirmPassword"
                           type="password"
                           full
                           placeholder="确认密码"/>
                </FormItem>
                <FormItem>
                    <Button @click="submit" class="cat-button" full>注册</Button>
                </FormItem>
                <p style="text-align: center">
                    <span>已有账号，请<nuxt-link class="primary-link" to="login"><b>登录</b></nuxt-link></span>
                </p>
            </Form>
        </div>
        <copyright-notice/>
    </div>
</template>

<script>
    import CopyrightNotice    from '../components/CopyrightNotice'
    import Input              from '../components/Input'
    import { Form, FormItem } from '../components/Form'
    import Button             from '../components/Button'

    export default {
        name: 'login',
        components: {
            Form,
            FormItem,
            Button,
            Input,
            CopyrightNotice
        },
        props: {
            prefixCls: {
                type: String,
                default: 'pg-login'
            }
        },
        data() {
            return {
                username: {
                    message: '',
                    messageType: '',
                    value: ''
                },
                password: {
                    message: '',
                    value: ''
                },
                confirmPassword: {
                    message: '',
                    value: ''
                }
            }
        },
        methods: {
            async submit() {
                if (await this.checkUsername() && this.checkPassword() && this.checkConfirmPassword()) {
                    this.register()
                }
            },
            async register() {
                // TODO 登录请求
                console.log('register')
            },
            async checkUsername() {
                if (!this.username.value) {
                    this.username.message = '请输入账号'
                    this.username.messageType = 'error'
                    return false
                }
                // TODO ajax check账号是否可用
                this.username.message = '账号可以使用'
                this.username.messageType = 'success'
                return true
            },
            checkPassword() {
                if (!/^[a-z0-9]{6,16}$/i.test(this.password.value)) {
                    this.password.message = '请输入6~16位数字、字母密码'
                    return false
                }
                this.password.message = ''
                return true
            },
            checkConfirmPassword() {
                if (this.confirmPassword.value !== this.password.value) {
                    this.confirmPassword.message = '两次输入密码不一致'
                    return
                }
                this.confirmPassword.message = ''
                return true
            }
        }
    }
</script>

<style lang="less">
    @import url('../assets/styles/base');

    @prefixCls: pg-login;
    .@{prefixCls} {
        width: 80%;
        li {
            position: relative;
            margin: 0 0 30px 0;
        }
        .go-to-register {
            display: block;
            text-align: center;
        }
    }

    .@{prefixCls}-container {
        display: flex;
        justify-content: center;
        padding: 40px 0;
    }

    @media (min-width: @screen-md-min) {
        .@{prefixCls} {
            width: 400px;
        }
    }
</style>
