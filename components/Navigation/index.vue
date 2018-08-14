<template>
    <header class="header">
        <nav :class="[prefixCls, {fold: fold}]">
            <section :class="`${prefixCls}-main`">
                <div :class="`${prefixCls}-logo`">
                    <nuxt-link to="/">
                        <img src="../../assets/images/logo.png" alt="logo">
                    </nuxt-link>
                </div>
                <ul :class="`${prefixCls}-navs`">
                    <li v-for="(item, index) in navItems" :key="index">
                        <nuxt-link :to="item.path">{{item.name}}</nuxt-link>
                    </li>
                    <template v-if="userProfile">
                        <li class="hidden-md hidden-lg">
                            <a @click.prevent="logout">
                                <i class="i-cat-girl i-cat-girl-logout"></i>
                                <span style="margin: 0 5px;">退出登录</span>
                            </a>
                        </li>
                    </template>
                    <template v-else>
                        <li class="hidden-md hidden-lg">
                            <nuxt-link to="/register">
                                <i class="i-cat-girl i-cat-girl-register"></i>
                                <span style="margin: 0 5px;">注册</span>
                            </nuxt-link>
                        </li>
                        <li class="hidden-md hidden-lg">
                            <nuxt-link to="/login">
                                <i class="i-cat-girl i-cat-girl-login"></i>
                                <span style="margin: 0 5px;">登录</span>
                            </nuxt-link>
                        </li>
                    </template>
                </ul>
            </section>
            <div :class="`${prefixCls}-right`">
                <section :class="`${prefixCls}-user`">
                    <template v-if="userProfile">
                        <ul class="hidden-xs hidden-sm">
                            <li>
                                <nuxt-link to="/">{{userProfile.name}}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">1101天</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">1000金币</nuxt-link>
                            </li>
                        </ul>
                        <section class="hidden-xs hidden-sm" style="margin: 0 20px 0 0;">
                            <a>退出登录 </a>
                            <span> | </span>
                            <a> 我的账户</a>
                        </section>
                    </template>
                    <template v-else>
                        <div class="visible-md visible-lg">
                            <nuxt-link to="/login">会员登录</nuxt-link>
                            <span style="margin: 0 10px;color: #ddd;">|</span>
                            <nuxt-link style="margin-right: 70px;" to="/register">注册</nuxt-link>
                        </div>
                    </template>
                    <div class="visible-md visible-lg">
                        关注我们的微信
                    </div>
                </section>
                <button @click="toggle"
                        class="btn btn-default visible-xs visible-sm i-cat-girl i-cat-girl-menu"></button>
            </div>
        </nav>
    </header>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        props: {
            prefixCls: {
                type: String,
                default: 'navigation'
            }
        },
        data() {
            return {
                fold: true,
                navItems: [
                    {
                        name: '首页',
                        path: '/'
                    },
                    {
                        name: '写真',
                        path: '/photo'
                    },
                    {
                        name: '视频',
                        path: '/video'
                    },
                    {
                        name: '专属',
                        path: '/exclusive'
                    },
                    {
                        name: '模特',
                        path: '/model'
                    },
                    {
                        name: '关于',
                        path: '/about'
                    }
                ]
            }
        },
        computed: {
            ...mapState({
                userProfile: state => state.user.userProfile
            })
        },
        methods: {
            toggle() {
                this.fold = !this.fold
            },
            logout() {
                // TODO 退出登录
                console.log('退出登录')
            }
        },
        watch: {
            $route() {
                this.fold = true
            }
        }
    }
</script>

<style lang="less">
    @import url('./index');
</style>
