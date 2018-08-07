<template>
    <section :class="prefixCls">
        <section :class="`${prefixCls}-banner-wrap`">
            <div v-swiper:mySwiper="swiperOption" class="swiper-container" :class="`${prefixCls}-banner`">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="i in 10" :key="i">
                        <p>{{i}}</p>
                        <p>{{i}}</p>
                        <p>{{i}}</p>
                        <p>{{i}}</p>
                        <p>{{i}}</p>
                    </div>
                </div>
            </div>
        </section>
        <section>

        </section>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption: {}
            }
        },
        props: {
            prefixCls: {
                type: String,
                default: 'pg-index'
            }
        }
    }
</script>

<style lang="less">
    @import url('../assets/styles/base');

    @prefixCls: pg-index;
    .@{prefixCls} {
        &-banner-wrap {
            padding: 40px 30px;
        }
        &-banner {
            background: #bbb;
        }
    }
</style>

