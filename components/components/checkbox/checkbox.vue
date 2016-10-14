<template>
    <label class="y-checkbox">
        <span class="y-checkbox-box">
            <span class="y-checkbox-dom"
                :class="{
                    checked : _checked,
                    disabled : disabled
                }"
            >
            	<i class="ion-checkmark"></i>
            </span>
            <input type="checkbox"
                v-if="trueLabel || falseLabel"
                v-model="_value"
                v-bind:true-value="trueLabel"
                v-bind:false-value="falseLabel"
                :disabled="disabled"
            >
            <input type="checkbox"
                v-else
                v-model="_value"
                :value="label"
                v-bind:true-value="label"
                v-bind:false-value="''"
                :disabled="disabled"
            >
            <slot></slot>
            <span v-if="!$slots.default" v-text="_value"></span>
        </span>
    </label>
</template>
<script>
export default {
    name: "y-checkbox",
    props:{
    	value:[String, Number, Boolean],
        label: [String, Number, Boolean],
        trueLabel:[String, Number, Boolean],
        falseLabel:[String, Number, Boolean],
        disabled: Boolean,
    },
    computed:{
    	_value:{
    		get(){
                return this.value === undefined ? this.$parent.value : this.value
    		},
    		set(newValue){
                if (this.value !== undefined) {
                    this.$emit('input', newValue);
                } else {
                    this.$parent.$emit('input', newValue);
                }
    		}
    	},
        _checked(){
            var type = Object.prototype.toString.call(this._value);
            if (type === '[object Boolean]') {
                return this._value;
            } else if (type === '[object Array]') {
                return this._value.indexOf(this.label) > -1;
            } else if (type === '[object String]' || type === '[object Number]') {
                return this._value === this.label || this._value === this.trueLabel;
            }
        }
    }
}
</script>
<style lang="less">
@import "checkbox";
</style>
