<template>
    <li class="col-xs-6 col-sm-4 col-md-3" :class="`${prefixCls}-container`">
        <div>
            <img style="width: 100%" :src="photo">
        </div>
        <div :class="`${prefixCls}-footer`">
            <div :class="`${prefixCls}-footer-info`">
                <var>
                    <i class="i-cat-girl i-cat-girl-clock" style="font-size: 12px"></i>
                    <span>2018-11-14</span>
                </var>
                <var>
                    <i class="i-cat-girl i-cat-girl-love" style="font-size: 12px"></i>
                    <span>666</span>
                </var>
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'photo-list-item',
        props: {
            prefixCls: {
                type: String,
                default: 'photo-list-item'
            },
            photo: String
        }
    }
</script>

<style lang="less">
    @prefixCls: photo-list-item;
    .@{prefixCls} {
        &-container {
            margin: 15px 0 0 0;
            padding: 0 10px;
            list-style-type: none;
        }
        &-footer {
            font-size: 14px;
            &-info {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            var {
                font-style: normal;
                margin: 0 10px 0 0;
                line-height: 2.5;
                span {
                    margin: 0 0 0 5px;
                }
            }
        }
    }
</style>
