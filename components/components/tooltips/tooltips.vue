<template>
    <div class="y-tooltips" ref="tool" v-show="show">
        <slot name="html"></slot>
    </div>
</template>
<script>
import { In, getLeft, getTop } from "../utils"
export default {
    name: "y-tooltips",
    props:{
        show:{
            type:Boolean,
            default: false
        },
        title:{
            type:String,
            default:""
        },
        content:{
            type:String,
            default:""
        },
        type:{
            type:String,
            default:""
        },
        placement:{
            type:String,
            default:"top"
        },
        position:{
            type:String,
            default:"centern"
        },
        trigger:{
            type:String,
            default:"click"
        },
        style:String,
    },
    mounted(){
        
        this.$parent.$el.appendChild(this.$slots.html[0].elm)

        document.body.appendChild(this.$refs.tool)
    },
}
</script>