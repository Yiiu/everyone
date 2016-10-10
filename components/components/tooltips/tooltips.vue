<template>
    <span @mouseout="on">
        <slot name="html"></slot>
        <div class="y-tooltips" ref="tool"
            :class="placement"
            v-show="show"
        >
            <div class="y-tooltips-delta"></div>
            <div class="y-tooltips-box">
                <span>123123</span>
            </div>
        </div>
    </span>
</template>
<script>
import { In, getLeft, getTop } from "../utils"
export default {
    name: "y-tooltips",
    props:{
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
        trigger:{
            type:String,
            default:"click"
        },
    },
    data(){
        return {
            show: false
        }
    },
    computed:{
        position(){
            return this.placement.split("-")
        },
    },
    methods:{
        Offset(){

            let html = [this.$slots.html[0].elm.offsetHeight,this.$slots.html[0].elm.offsetWidth]
            let ref = [this.$refs.tool.offsetHeight, this.$refs.tool.offsetWidth]
            let left = this.$slots.html[0].elm.offsetLeft
            let top = this.$slots.html[0].elm.offsetTop - ref[0]/2

            console.log(this.$refs.tool.offsetHeight)
            
            this.$refs.tool.style.top = `${top}px`

            this.$refs.tool.style.left = `${left}px`

        },
        on(){
            this.show = true
            this.Offset()
        },
        close(){
            this.show = false
        }

    },
    mounted(){

        document.body.appendChild(this.$refs.tool)


    },
}
</script>
<style lang="less">
@import "tooltips";
</style>