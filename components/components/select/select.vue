<template>
    <div class="y-select">
        <div class="y-select-i" 
            @mouseenter="hover = true"
            @mouseleave="hover = false"
        >
            <input 
                type="text" 
                class="y-select-input"  
                ref="html" 
                v-model="selectLabel" 
                readOnly="true" 
                placeholder="请选择"
                @click.self="clicks"
                :disabled="!disabled ? null : 'disabled'"
            >
            <div class="ion-chevron-down ion dr">
                <y-svg type="v" :class="{active:show}" v-show="clearable ? !hover : true" @click.native.stop="clicks" :width="16"></y-svg>
                <y-svg type="x" @click.native="delVaule" :class="{active:show}" v-show="hover && clearable" :width="16"></y-svg>
            </div>
        </div>
        <transition name="y-select">
            <ul class="y-select-dropdown" v-show="show" ref="dropdown">
                <slot v-on:asdfs="asdf"></slot>
            </ul>
        </transition>
    </div>
</template>
<script>
import { In, getLeft, getTop } from '../utils'
export default {
    name: 'y-select',
    props: {
        value: {},
        clearable: {       // 可清空
            type: Boolean,
            default: false
        },
        disabled: {       // 禁用
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            show: false,
            hover: false,     // 清空状态
            selectValue: '',
            selectLabel: ''
        }
    },
    created () {
        this.selectValue = this.value
    },
    mounted () {
        document.addEventListener('click', this.ifEl)
        document.body.appendChild(this.$refs.dropdown)
        window.addEventListener('scroll', this.offset)
        window.addEventListener('resize', this.offset)
        this.offset()
    },
    destroyed () {
        document.body.removeChild(this.$refs.dropdown)
        document.removeEventListener('click', this.ifEl)
        window.removeEventListener('scroll', this.offset)
        window.removeEventListener('resize', this.offset)
    },
    methods: {
        clicks () {
            if (this.disabled) {
                return
            }
            this.offset()
            if (this.show) {
                this.show = false
            } else {
                this.show = true
            }
        },
        close () {
            this.show = false
        },
        on () {
            this.show = true
        },
        offset () {
            let html = [this.$refs.html.offsetHeight, this.$refs.html.offsetWidth]
            let left = getLeft(this.$refs.html)
            let top = getTop(this.$refs.html)
            this.$refs.dropdown.style.top = `${top + html[0] + 4}px`
            this.$refs.dropdown.style.left = `${left}px`
            this.$refs.dropdown.style.width = `${this.$refs.html.offsetWidth}px`
        },
        ifEl: function (e) {
            if (!this.show) {
                return
            }
            if (!In(e.target, this.$refs.dropdown) && !In(e.target, this.$refs.html)) {
                this.show = false
            }
        },
        delVaule () {
            if (this.disabled) {
                return
            }
            this.selectValue = null
            this.selectLabel = null
            this.show = false
        }
    },
    watch: {
        'value': function (value) {
            this.selectValue = this.value
        },
        'selectValue': function (value) {
            this.$emit('input', value)
        }
    }
}
</script>
<style lang="less">
@import "select";
</style>