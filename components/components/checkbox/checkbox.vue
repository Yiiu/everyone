<template>
    <label class="y-checkbox">
        <span class="y-checkbox-box">
            <span class="y-checkbox-dom"
                :class="{
                    checked : _value == _label,
                    disabled : disabled
                }"
            >
            	<i class="ion-checkmark"></i>
            </span>
            <input type="checkbox" v-model="_value" 
                v-bind:true-value="_true" 
                v-bind:false-value="_false"
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
        label: {
            type: [String, Number, Boolean],
        },
        true:[String, Number, Boolean],
        false:[String, Number, Boolean],
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
        _label:function(){
            if(!this.label) {
                return this.true === undefined ? true : this.true
            }else {
                return this.true === undefined ? this.label : this.true
            }
        },
        _true:function(){
            if(!this._label){
                return this.true === undefined ? true : this.true
            }else {
                return this._label
            }
        },
        _false:function(){
            return this.false === undefined ? false : this.false
        }
    }
}
</script>
<style lang="less">
@import "checkbox";
</style>