<template>
    <label  class="y-radio">
        <span class="y-radio-box">
            <span class="y-radio-dom"
                :class="{
                    checked : _value == label,
                    disabled: disabled
                }"
            ></span>
            <input type="radio" v-model="_value" :value="label" :disabled="disabled">
        </span>
        <span v-if="!$slots.default" v-text="label"></span>
        <slot></slot>
    </label>
</template>
<script>
export default {
    name: 'y-radio',
    props: {
        value: {},
        label: {
            type: [String, Number, Boolean],
            required: true
        },
        checked: {
            type: Boolean,
            default: false
        },
        disabled: Boolean
    },
    data () {
        return {
            focus: false,
            group: this.$parent.$options._componentTag === 'y-radio-group'
        }
    },
    created () {
        if (this.checked) {
            this._value = this.label
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
        }
    }
}
</script>
<style lang="less">
@import "radio";
</style>
