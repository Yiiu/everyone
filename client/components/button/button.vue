<template>
    <button class="y-btn" :class="[style]">
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
            default:"default",
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
            return `btn-${this.type} ${this.color} ${this.size}`
        }
    }
}
</script>
<style lang="less">
@import "./button";
</style>