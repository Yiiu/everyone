<template>
    <li class="y-select-item" @click="clicks" :class="{active:value == _value, disabled:disabled}">
        <slot></slot>
    </li>
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