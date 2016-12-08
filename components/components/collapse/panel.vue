<template>
    <div class="y-collapse-item" :class="show ? 'y-collapse-open': 'y-collapse-close'">
        <div class="y-collapse-header" @click="handle">
            <y-svg type="arrow" :width="12"></y-svg>
            {{header}}
        </div>
        <transition name="y-collapse-content" 
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
        >
            <div class="y-collapse-content" v-if="show">
                <div class="y-collapse-content-box">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'y-panel',
    props: {
        header: String,
        col: Number
    },
    methods: {
        handle () {
            if (this.show) {
                this.$parent.activeKey.forEach((i, index) => {
                    if (this.$parent.accordion) {
                        this.$parent.activeKey = []
                    } else {
                        if (this.col === i) {
                            this.$parent.activeKey.splice(index, 1)
                        }
                    }
                })
            } else {
                if (this.$parent.accordion) {
                    this.$parent.activeKey = [this.col]
                } else {
                    this.$parent.activeKey.push(this.col)
                }
            }
        },
        beforeEnter (el) {
            el.style.height = 0 + 'px'
        },
        enter (el) {
            if (el.scrollHeight !== 0) {
                el.style.height = el.scrollHeight + 'px'
            }
        },
        afterEnter (el) {
            el.style.height = ''
        },
        beforeLeave (el) {
            if (el.scrollHeight !== 0) {
                el.style.height = el.scrollHeight + 'px'
            }
        },
        leave (el) {
            if (el.scrollHeight !== 0) {
                setTimeout(() => {
                    el.style.height = 0 + 'px'
                })
            }
        }
    },
    computed: {
        'show': function () {
            let num = 0
            for (let i of this.$parent.activeKey) {
                if (i === this.col) {
                    num++
                }
            }
            if (num !== 0) {
                return true
            } else {
                return false
            }
        }
    }
}
</script>