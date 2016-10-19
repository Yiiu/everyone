<template>
    <button class="y-btn" :class="style">
        <transition name="opacity">
            <i class="ion-load-c" v-if="loading"></i>
        </transition>
        <slot></slot>
    </button>
</template>
<script>
export default {
    name:"y-button",
    props:{
        type:{
            type:String,
            default:"primary",
        },
        size:{
            type:String,
            default:"",
        },
        disabled:{
            type:Boolean,
            default:false
        },
        loading:{
            type:Boolean,
            default:false
        },
        color:{
            type:String,
            default:"blue"
        }
    },
    computed:{
        "style":function(){
            let style = ``

            style += `btn-${this.type} ${this.color} `

            if(this.size != ""){
                style += ` ${this.size}`
            }
            if(this.disabled){
                style += ` disabled`
            }
            if(this.loading){
                style += ` loading`
            }
            return style
        }
    }
}
</script>
<style lang="less">
@import "./button";
</style>
