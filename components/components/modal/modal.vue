<template>
    <transition name="mdc">
        <div class="y-modal-box" 
            v-if="show" 
            @click.self="del" 
            :class="[{'y-modal-align-center': center}, type]"
        >   
            <div class="y-modal">
                <div class="y-modal-content"
                    :style="{top: `${top}px`}"
                >   
                    <div class="m-header">
                        <h2>
                            <y-svg type="help" v-if="type === 'confirm'"></y-svg>
                            <template v-if="!$slots.title">{{title}}</template>
                            <slot name="title"></slot>
                        </h2>
                    </div>
                    <div class="m-body">
                        <p v-if="!$slots.center">{{content}}</p>
                        <slot name="center"></slot>
                    </div>
                    <div class="m-footer">
                        <y-button
                            type="ghost"
                            @click.native="next('reject')"
                            v-text="cancelText"
                        ></y-button>
                        <y-button
                            type="primary"
                            @click.native="next('resolve')"
                            v-text="okText"
                        ></y-button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'y-modal',
    data () {
        return {
            show: false,
            global: false
        }
    },
    props: {
        value: Boolean,
        type: String,
        title: String,
        content: String,
        center: {
            type: Boolean,
            default: false
        },
        top: {
            type: Number,
            default: 40
        },
        okText: {
            type: String,
            default: '确认'
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        onOk: Function,
        onCancel: Function
    },
    mounted () {
        console.log(this)
        this.$nextTick(function () {
            document.body.appendChild(this.$el)
        })
    },
    methods: {
        // cbk
        next (value) {
            this.show = false
            if (value === 'resolve') {
                this.onOk ? this.onOk() : this.$emit('on-ok')
            } else {
                this.onCancel ? this.onCancel() : this.$emit('on-cancel')
            }
        },
        del () {
            if (this.type !== 'confirm') {
                this.show = false
            }
        }
    },
    watch: {
        show: function (value) {
            if (this.global) {
                if (!value) {
                    this.$el.addEventListener('transitionend', () => {
                        this.$destroy(true)
                        if (this.$el.parentNode) {
                            this.$el.parentNode.removeChild(this.$el)
                        }
                    })
                }
            } else {
                this.$emit('input', value)
            }
        },
        value: function (value) {
            this.show = value
        }
    }
}
</script>
<style lang="less">
@import "./modal.less";
</style>
