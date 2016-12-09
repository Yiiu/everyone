import { In } from '../utils'

export default {
    props: {
        value: Boolean,
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
            pop: Object,
            offsetNum: [0, 0],
            slotSize: [],
            popSize: []
        }
    },
    // 默认value
    created () {
        this.show = this.value
    },
    destroyed () {
        document.body.removeChild(this.pop)
        document.removeEventListener('click', this.ifEl)
        window.removeEventListener('scroll', this.offsetPosition)
        window.removeEventListener('resize', this.offsetPosition)
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
            this.offsetPosition()
            this.events()
        })
    },
    methods: {
        Offset () {
            this.pop.style.top = `${this.offsetNum[1] + this.slot.offsetTop}px`
            this.pop.style.left = `${this.offsetNum[0] + this.slot.offsetLeft}px`
        },
        enter () {
            this.offsetPosition()
        },
        offsetPosition () {
            this.slotSize = [this.slot.offsetHeight, this.slot.offsetWidth]
            setTimeout(() => {
                this.popSize = [this.pop.offsetHeight, this.pop.offsetWidth]

                if (['top', 'bottom'].indexOf(this.position[0]) !== -1) {
                    if (this.position[0] === 'top') {
                        this.offsetNum[1] = -this.popSize[0] - this.offset
                    } else {
                        this.offsetNum[1] = this.slotSize[0] + this.offset
                    }
                } else {
                    if (this.position[0] === 'left') {
                        this.offsetNum[0] = this.slotSize[1] + this.offset
                    } else {
                        this.offsetNum[0] = -this.popSize[1] - this.offset
                    }
                }

                if (this.position[1]) {
                    if (['top', 'bottom'].indexOf(this.position[1]) !== -1) {
                        if (this.position[1] === 'top') {
                            this.offsetNum[1] = 0
                        } else {
                            this.offsetNum[1] = this.slotSize[0] - this.popSize[0]
                        }
                    } else {
                        if (this.position[1] === 'left') {
                            this.offsetNum[0] = 0
                        } else {
                            this.offsetNum[0] = this.slotSize[1] - this.popSize[1]
                        }
                    }
                } else {
                    if (this.position[0] === 'top' || this.position[0] === 'bottom') {
                        this.offsetNum[0] = (this.slotSize[1] - this.popSize[1]) / 2
                    } else if (this.position[0] === 'left' || this.position[0] === 'right') {
                        this.offsetNum[1] = (this.slotSize[0] - this.popSize[0]) / 2
                    }
                }
                this.Offset()
            })
        },

        on () {
            this.offsetPosition()
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
        }
    },
    watch: {
        'show': function (value) {
            if (value) {
                this.offsetPosition()
                if (this.trigger === 'click') {
                    document.addEventListener('click', this.ifEl)
                }
                this.$emit('input', value)
                window.addEventListener('scroll', this.offsetPosition)
                window.addEventListener('resize', this.offsetPosition)
            } else {
                this.$emit('input', value)
                document.removeEventListener('click', this.ifEl)
                window.removeEventListener('scroll', this.offsetPosition)
                window.removeEventListener('resize', this.offsetPosition)
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
