<template>
    <div>
        <div :class="`${prefixCls}-container`">
            <Form :class="prefixCls">
                <FormItem :errorMsg="username.error">
                    <Input v-model="username.value"
                           full
                           placeholder="账号"/>
                </FormItem>
                <FormItem :errorMsg="password.error">
                    <Input v-model="password.value"
                           type="password"
                           full
                           placeholder="确认密码"/>
                </FormItem>
                <FormItem>
                    <Button @click="submit" class="cat-button" full>登录</Button>
                </FormItem>
            </Form>
            <!--<ul :class="prefixCls">-->
            <!--<li>-->
            <!--<cat-input v-model="username"/>-->
            <!--</li>-->
            <!--<li>-->
            <!--<input v-model.trim="password" class="cat-input" placeholder="确认密码">-->
            <!--</li>-->
            <!--<li>-->
            <!--<p v-show="errorMsg" class="error-msg i-cat-girl i-cat-girl-error">{{ errorMsg }}</p>-->
            <!--<button @click="submit" class="cat-button">登录</button>-->
            <!--</li>-->
            <!--<li class="go-to-register">-->
            <!--<nuxt-link to="register">注册账号</nuxt-link>-->
            <!--</li>-->
            <!--</ul>-->
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
                errorMsg: '',
                username: {
                    error: '',
                    value: ''
                },
                password: {
                    error: '',
                    value: ''
                }
            }
        },
        methods: {
            submit() {
                if (!this.username.value) {
                    this.username.error = '请输入用户名'
                    return
                }
                this.username.error = ''

                if (!this.password.value) {
                    this.password.error = '请输入密码'
                    return
                }
                this.password.error = ''

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
