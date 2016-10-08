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
		<slot></slot>
	</label>
</template>
<script>
  export default {
    name: 'y-radio',
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
      };
    },
    created(){
    	if(this.checked){
    		this._value = this.label
    	}
    },
    computed: {
      _value: {
        get() {
          return this.value;
        },
        set(newValue) {
	        this.$emit('input', newValue);
        }
      }
    }
  };
</script>
<style lang="less">
@import "radio";
</style>