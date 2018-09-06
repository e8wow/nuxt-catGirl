<template>
    <div>
        <div :class="`${prefixCls}-container`">
            <Form :class="prefixCls">
                <FormItem :message="username.message"
                          messageType="error">
                    <Input v-model="username.value"
                           full
                           placeholder="账号"/>
                </FormItem>
                <FormItem :message="password.message"
                          messageType="error">
                    <Input v-model="password.value"
                           type="password"
                           full
                           placeholder="确认密码"/>
                </FormItem>
                <Button @click="submit" class="cat-button" full>登录</Button>
                <p style="margin-top: 20px;text-align: center">
                    <nuxt-link to="register">注册</nuxt-link>
                </p>
            </Form>
        </div>
        <div style="padding: 0 15px;">
            <copyright-notice/>
        </div>
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
                    value: ''
                },
                password: {
                    message: '',
                    value: ''
                }
            }
        },
        methods: {
            submit() {
                if (!this.username.value) {
                    this.username.message = '请输入账号'
                    return
                }
                this.username.message = ''

                if (!this.password.value) {
                    this.password.message = '请输入密码'
                    return
                }
                this.password.message = ''

                this.login()
            },
            async login() {
                // TODO 登录请求
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
