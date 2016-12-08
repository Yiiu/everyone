<template>
    <transition name="mdc">
        <div class="y-modal-box" 
            v-if="show" 
            @click.self="del" 
            :class="[{'y-modal-align-center': center}, type ? `y-modal-${type}` : '']"
        >   
            <div class="y-modal" :style="{top: `${top}px`}">
                <div class="y-modal-content">   
                    <div class="m-header">
                        <h2>
                            <y-svg :type="icon" v-if="type === 'confirm' || type === 'alert'" :width="26" :class="`y-modal-${icon}`"></y-svg>
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
                            v-if="type !== 'alert'"
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
            global: false,
            client: [],
            scroll: null
        }
    },
    props: {
        value: Boolean,
        type: String,
        icon: {
            type: String,
            default: 'info'
        },
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
            if (!this.type) {
                this.show = false
            }
        }
    },
    watch: {
        show: function (value) {
            if (value) {
                this.scroll = document.body.scrollTop
                document.body.style.zoom = 1
                document.body.style.position = 'fixed'
                document.body.style.width = '100%'
                document.body.style.top = -this.scroll + 'px'
            } else {
                document.body.style.zoom = null
                document.body.style.position = null
                document.body.style.width = null
                document.body.style.top = null
                document.body.scrollTop = this.scroll
            }
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
