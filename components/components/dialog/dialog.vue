<template>
    <transition name="dialog">
        <div class="y-dialog" v-if="show" @click.self="close">
            <div class="y-dialog-content">
                <div class="y-dialog-title">
                    <h3 v-text="title"></h3>
                    <y-svg type="x" class="ion-close" @click.native="close"></y-svg>
                </div>
                <div class="y-dialog-body">
                    <slot name="content"></slot>
                </div>
                <div class="y-dialog-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'y-dialog',
    data () {
        return {
            show: false
        }
    },
    props: {
        value: Boolean,
        title: String
    },
    methods: {
        close () {
            this.show = false
        }
    },
    mounted () {
        this.$nextTick(function () {
            document.body.appendChild(this.$el)
        })
    },
    watch: {
        // value更新
        'value': function (value) {
            if (value) {
                this.show = true
            } else {
                this.show = false
            }
        },
        'show': function (value) {
            this.$emit('input', value)
        }
    }
}
</script>
<style lang="less">
@import "dialog.less";
</style>