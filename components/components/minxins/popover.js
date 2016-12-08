import { In, getLeft, getTop } from '../utils'

export default {
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
        delta: Boolean,
        className: {}
    },
    data () {
        return {
            show: false,
            slot: Object,
            pop: Object
        }
    },
    // 默认value
    created () {
        this.show = this.value
    },
    destroyed () {
        document.body.removeChild(this.pop)
        document.removeEventListener('click', this.ifEl)
        window.removeEventListener('scroll', this.Offset)
        window.removeEventListener('resize', this.Offset)
    },
    mounted () {
        this.$nextTick(function () {
            if (this.$slots.slot) {
                this.slot = this.$slots.slot[0].elm
            } else {
                this.slot = this.$refs.slot
            }
            this.pop = this.$refs.pop
            document.body.appendChild(this.$refs.pop)

            // this.slot
            this.$el.parentElement.replaceChild(this.slot, this.$el)
            this.Offset()
            this.events()
        })
    },
    methods: {
        Offset () {
            let html = [this.slot.offsetHeight, this.slot.offsetWidth]
            let left = getLeft(this.slot)
            let top = getTop(this.slot)

            if (this.position[0] === 'top') {
                top -= this.offset
            } else if (this.position[0] === 'bottom') {
                top += this.offset
            } else if (this.position[0] === 'left') {
                left += this.offset
            } else if (this.position[0] === 'right') {
                left -= this.offset
            }

            this.pop.style.top = `${top + (html[0] * this.tops)}px`

            this.pop.style.left = `${left + (html[1] * this.lefts)}px`
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
                this.slot.addEventListener('click', this.Open)
            } else if (this.trigger === 'hover') {
                this.pop.addEventListener('mouseover', () => {
                    clearTimeout(that.Timer)
                    this.show = true
                })
                this.pop.addEventListener('mouseout', () => {
                    that.Timer = setTimeout(() => {
                        that.show = false
                    }, 100)
                })
                this.slot.addEventListener('mouseover', () => {
                    clearTimeout(that.Timer)
                    this.show = true
                })
                this.slot.addEventListener('mouseout', () => {
                    that.Timer = setTimeout(() => {
                        that.show = false
                    }, 100)
                })
            } else if (this.trigger === 'focus') {
                this.slot.addEventListener('focus', this.on)
                this.slot.addEventListener('blur', this.close)
            }
        },
        ifEl: function (e) {
            if (!this.show) {
                return
            }
            if (!In(e.target, this.pop) && !In(e.target, this.slot)) {
                this.show = false
            }
        }
    },
    computed: {
        position () {
            return this.placement.split('-')
        },
        classNames () {
            return this.position[1] ? `${this.position[0]}-${this.position[1]} ${this.theme}` : `${this.position[0]} ${this.theme}`
        },
        tops () {
            if (this.position[0] === 'top') {
                return 0
            } else if (this.position[0] === 'bottom') {
                return 1
            } else if (
                this.position[0] === 'left' && !this.position[1] ||
                this.position[0] === 'right' && !this.position[1]
            ) {
                return 0.5
            } else if (
                this.position[1] === 'top' ||
                this.position[1] === 'bottom'
            ) {
                if (this.position[1] === 'top') {
                    return 0
                } else {
                    return 1
                }
            }
        },
        lefts () {
            if (this.position[0] === 'top' && !this.position[1] || this.position[0] === 'bottom' && !this.position[1]) {
                return 0.5
            } else if (this.position[0] === 'top' && this.position[1] || this.position[0] === 'bottom' && this.position[1]) {
                if (this.position[1] === 'left') {
                    return 0
                } else {
                    return 1
                }
            } else if (this.position[0] === 'left' || this.position[0] === 'right') {
                if (this.position[0] === 'left') {
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
