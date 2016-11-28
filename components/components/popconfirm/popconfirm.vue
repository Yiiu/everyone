<template>
    <div class="y-popconfirm">
        <y-tooltips
            theme="white y-popconfirm"
            :trigger="trigger"
            :placement="placement"
            v-model="show"
        >
            <template slot="html">
                <slot name="html"></slot>
            </template>
            <template slot="content">
                <div class="y-tooltips-title">
                    <y-svg type="help" :width="20" class="icon"></y-svg> 
                    <p>{{title}}</p>
                </div>
                <div class="y-tooltips-content" v-if="$slots.btn">
                    <slot name="btn"></slot>
                </div>
                <div class="y-tooltips-content" v-else>
                    <y-button type="ghost" v-if="backBtn.show" v-text="backBtn.text" @click.native="onBack"></y-button>
                    <y-button v-if="okBtn.show" v-text="okBtn.text" @click.native="onOk"></y-button>
                </div>
            </template>
        </y-tooltips>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'y-popconfirm',
    data () {
        return {
            show: false
        }
    },
    // 初始
    created () {
        this.show = this.vaule
    },
    props: {
        value: Boolean,
        title: {
            type: String,
            required: true
        },
        trigger: {
            type: String,
            default: 'click'
        },
        placement: {
            type: String,
            default: 'top'
        },
        okBtn: {
            type: Object,
            default: function () {
                return {
                    show: true,
                    text: '确认'
                }
            }
        },
        backBtn: {
            type: Object,
            default: function () {
                return {
                    show: true,
                    text: '取消'
                }
            }
        },
        okCbk: {
            type: Function
        },
        backCbk: {
            type: Function
        }
    },
    methods: {
        onOk () {
            if (this.okCbk) {
                this.okCbk()

                this.show = false
            } else {
                this.show = false
            }
        },
        onBack () {
            if (this.backCbk) {
                this.backCbk()

                this.show = false
            } else {
                this.show = false
            }
        }
    },
    watch: {
        'show': function (value) {
            if (value) {
                this.$emit('input', value)
            } else {
                this.$emit('input', value)
            }
        },
        // value更新
        'value': function (value) {
            if (value) {
                this.show = true
            } else {
                this.show = false
            }
        }
    }
}
</script>
<style lang="less">
@import "popconfirm";
</style>
