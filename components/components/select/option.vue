<template>
    <li class="y-select-item" 
        @click="clicks" 
        :class="{active:value == _value, disabled:disabled}" 
        >{{label ? label : value}}</li>
</template>
<script>
export default {
    name:"y-option",
    props:{
        label:{},
        value:{},
        disabled:{
            type:Boolean,
            default:false,
        },
    },
    methods:{
        clicks(){
            if(!this.disabled){
                this.$parent.$data.selectLabel = this.label
                this.$parent.$emit('input', this.value)
                this.$parent.$data.show = false
            }
        }
    },
    computed:{
        _value:{
            get(){
                return this.$parent.value
            },
            set(value){
                console.log(value)
            }
        }
    }
}
</script>