<template>
    <span>
        <slot name="html"></slot>
        <template>
            <transition :name="`tooltips-${classs[1] ? classs[0]+classs[1]:classs[0]}`">
                <div class="y-tooltips"
                    ref="tool"
                    :class="classNames"
                    v-show="show"
                >
                    <div class="y-tooltips-delta" v-if="!delta"></div>
                    <div class="y-tooltips-box">
                        <span v-text="content" v-if="!$slots.content"></span>
                        <slot name="content"></slot>
                    </div>
                </div>
            </transition>
        </template>
    </span>
</template>
<script>
import { In, getLeft, getTop } from '../utils'
export default {
    name: 'y-tooltips',
    props: {
        value: Boolean,
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        placement: {
            type: String,
            default: 'top'
        },
        trigger: {
            type: String,
            default: 'click'
        },
        theme: {
            type: String,
            default: 'blue'
        },
        offset: {
            type: Number,
            default: 5
        },
        delta: {
            type: Boolean
        }
    },
    data () {
        return {
            show: false,
            html: Object
        }
    },
    // 默认value
    created () {
        this.show = this.value
    },
    destroyed () {
        document.body.removeChild(this.$refs.tool)
        document.removeEventListener('click', this.ifEl)
        window.removeEventListener('scroll', this.Offset)
        window.removeEventListener('resize', this.Offset)
    },
    mounted () {
        this.$nextTick(function () {
            // this.html
            if (this.$refs.html) {
                this.html = this.$refs.html
            } else {
                this.html = this.$slots.html[0].elm
            }

            document.body.appendChild(this.$refs.tool)

            // this.html
            if (this.$refs.html) {
                this.$el.parentElement.removeChild(this.$el)
            } else {
                this.$el.parentElement.replaceChild(this.$slots.html[0].elm, this.$el)
            }
            this.Offset()
            this.events()
        })
    },
    methods: {
        Offset () {
            let html = [this.html.offsetHeight, this.html.offsetWidth]
            let left = getLeft(this.html)
            let top = getTop(this.html)

            if (this.classs[0] === 'top') {
                top -= this.offset
            } else if (this.classs[0] === 'bottom') {
                top += this.offset
            } else if (this.classs[0] === 'left') {
                left += this.offset
            } else if (this.classs[0] === 'right') {
                left -= this.offset
            }

            this.$refs.tool.style.top = `${top + (html[0] * this.tops)}px`

            this.$refs.tool.style.left = `${left + (html[1] * this.lefts)}px`
        },
        on () {
            this.Offset()
            this.show = true
        },
        Open () {
            if (this.show) {
                this.close()
            } else {
                this.on()
            }
        },
        close () {
            this.show = false
        },
        // 绑定事件，hover，click，focus
        events () {
            let that = this
            if (this.trigger === 'click') {
                this.html.addEventListener('click', this.Open)
            } else if (this.trigger === 'hover') {
                this.$refs.tool.addEventListener('mouseover', () => {
                    clearTimeout(that.Timer)
                    this.show = true
                })
                this.$refs.tool.addEventListener('mouseout', () => {
                    that.Timer = setTimeout(() => {
                        that.show = false
                    }, 100)
                })
                this.html.addEventListener('mouseover', () => {
                    clearTimeout(that.Timer)
                    this.show = true
                })
                this.html.addEventListener('mouseout', () => {
                    that.Timer = setTimeout(() => {
                        that.show = false
                    }, 100)
                })
            } else if (this.trigger === 'focus') {
                this.html.addEventListener('focus', this.on)
                this.html.addEventListener('blur', this.close)
            }
        },
        ifEl: function (e) {
            if (!this.show) {
                return
            }
            if (!In(e.target, this.$refs.tool) && !In(e.target, this.html)) {
                this.show = false
            }
        }
    },
    computed: {
        classs () {
            return this.placement.split('-')
        },
        classNames () {
            return this.classs[1] ? `${this.classs[0]}-${this.classs[1]} ${this.theme}` : `${this.classs[0]} ${this.theme}`
        },
        tops () {
            if (this.classs[0] === 'top') {
                return 0
            } else if (this.classs[0] === 'bottom') {
                return 1
            } else if (
                this.classs[0] === 'left' && !this.classs[1] ||
                this.classs[0] === 'right' && !this.classs[1]
            ) {
                return 0.5
            } else if (
                this.classs[1] === 'top' ||
                this.classs[1] === 'bottom'
            ) {
                if (this.classs[1] === 'top') {
                    return 0
                } else {
                    return 1
                }
            }
        },
        lefts () {
            if (this.classs[0] === 'top' && !this.classs[1] || this.classs[0] === 'bottom' && !this.classs[1]) {
                return 0.5
            } else if (this.classs[0] === 'top' && this.classs[1] || this.classs[0] === 'bottom' && this.classs[1]) {
                if (this.classs[1] === 'left') {
                    return 0
                } else {
                    return 1
                }
            } else if (this.classs[0] === 'left' || this.classs[0] === 'right') {
                if (this.classs[0] === 'left') {
                    return 1
                } else {
                    return 0
                }
            }
        }
    },
    watch: {
        'show': function (value) {
            if (value) {
                this.Offset()
                if (this.trigger === 'click') {
                    document.addEventListener('click', this.ifEl)
                }
                this.$emit('input', value)
                window.addEventListener('scroll', this.Offset)
                window.addEventListener('resize', this.Offset)
            } else {
                this.$emit('input', value)
                document.removeEventListener('click', this.ifEl)
                window.removeEventListener('scroll', this.Offset)
                window.removeEventListener('resize', this.Offset)
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
@import "tooltips";
</style>
