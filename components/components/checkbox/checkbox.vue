<template>
    <label class="y-checkbox">
        <span class="y-checkbox-box">
            <span class="y-checkbox-dom"
                :class="{
                    checked : _checked,
                    disabled : disabled
                }"
            >
                <y-svg type="check" :width="14" color="#fff"></y-svg>
            </span>
            <input type="checkbox"
                v-if="trueLabel || falseLabel"
                v-bind:true-value="trueLabel"
                v-bind:false-value="falseLabel"
                v-model="_value"
                :disabled="disabled"
            >
            <input type="checkbox"
                v-else
                :disabled="disabled"
                :value="label"
                v-model="_value"
            >
            <span class="check-content" v-if="!content">
                <slot></slot>
                <span v-if="!$slots.default" v-text="_value"></span>
            </span>
        </span>
    </label>
</template>
<script>
export default {
    name: 'y-checkbox',
    props: {
        value: {},
        label: [String, Number, Boolean],
        trueLabel: [String, Number, Boolean],
        falseLabel: [String, Number, Boolean],
        disabled: Boolean,
        content: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            group: this.$parent.$options._componentTag === 'y-checkbox-group'
        }
    },
    computed: {
        _value: {
            get () {
                return this.group ? this.$parent.value : this.value
            },
            set (newValue) {
                if (!this.group) {
                    this.$emit('input', newValue)
                } else {
                    this.$parent.$emit('input', newValue)
                }
            }
        },
        _checked () {
            var type = Object.prototype.toString.call(this._value)
            if (type === '[object Boolean]') {
                return this._value
            } else if (type === '[object Array]') {
                return this._value.indexOf(this.label) > -1
            } else if (type === '[object String]' || type === '[object Number]') {
                return this._value === this.label || this._value === this.trueLabel
            }
        }
    }
}
</script>
<style lang="less">
@import "checkbox";
</style>
