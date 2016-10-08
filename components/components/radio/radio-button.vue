<template>
    <label  class="y-radio button">
        <span class="y-radio-box">
            <y-button @click.native="valueOn" type="ghost"
                :class="{
                    checked : _value == label,
                    disabled: disabled
                }"
            ><slot></slot></y-button>
            <input type="radio" v-model="_value" :value="label" :disabled="disabled">
        </span>
        <span v-if="!$slots.default" v-text="label"></span>
    </label>
</template>
<script>
export default {
    name: 'y-radio-button',
    props: {
        value: [String, Number],
        label: {
            type: [String, Number],
            required: true
        },
        checked:{
            type:Boolean,
            default:false,
        },
        disabled: Boolean,
        name: String
    },
    data() {
        return {
            focus: false
        }
    },
    created(){
        if(this.checked){
            this._value = this.label
        }
    },
    methods:{
        valueOn(){
            console.log(this._value)
            this._value = this.label
        }
    },
    computed: {
        _value: {
            get() {
                return this.value !== undefined ? this.value : this.$parent.value;
            },
            set(newValue) {
                if(this.value !== undefined){
                    this.$emit('input', newValue);
                }else {
                    this.$parent.$emit('input', newValue);
                }
            }
        }
    }
};
</script>
<style lang="less">
@import "radio";
</style>