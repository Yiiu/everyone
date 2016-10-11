<template>
    <div class="y-tooltip">
        <span class="y-tooltip-html" @mouseover="on" @mouseout="close">
            <slot name="html"></slot>
        </span>
        <transition name="opacity">
            <div class="y-tooltips" ref="tool"
                :class="classNames"
                v-show="show"
                @mouseover="on"
                @mouseout="close"
            >
                <div class="y-tooltips-delta"></div>
                <div class="y-tooltips-box">
                    <span>123123</span>
                </div>
            </div>
        </transition>
    </div>
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
        theme:{
            type:String,
            default:"blue"
        }
    },
    data(){
        return {
            show: false
        }
    },
    methods:{
        Offset(){
            let html = [this.$slots.html[0].elm.offsetHeight,this.$slots.html[0].elm.offsetWidth]
            let left = getLeft(this.$slots.html[0].elm)
            let top = getTop(this.$slots.html[0].elm)

            this.$refs.tool.style.top = `${top + (html[0] * this.tops)}px`

            this.$refs.tool.style.left = `${left + (html[1] * this.lefts)}px`
        },
        on(){
            this.Offset()
            this.show = true
        },
        close(){
            this.show = false
        }
    },
    computed:{
        classs(){
            return this.placement.split("-")
        },
        classNames(){
            return `${this.placement} ${this.theme}`
        },
        tops(){
            if(this.classs[0] == "top"){
                return 0
            }else if(this.classs[0] == "bottom"){
                return 1
            }else if(
                this.classs[0] == "left" && !this.classs[1] ||
                this.classs[0] == "right" && !this.classs[1]
            ){
                return 0.5
            }else if(
                this.classs[1] == "top" ||
                this.classs[1] == "bottom"
            ){
                if(this.classs[1] == "top" ){
                    return 0
                }else {
                    return 1
                }
            }
        },
        lefts(){
            if(this.classs[0] == "top" && !this.classs[1] || this.classs[0] == "bottom" && !this.classs[1]){
                return 0.5
            }else if(this.classs[0] == "top" && this.classs[1] || this.classs[0] == "bottom" && this.classs[1]){
                if(this.classs[1] == "left"){
                    return 0
                }else {
                    return 1
                }
            }else if(this.classs[0] == "left" || this.classs[0] == "right"){
                if(this.classs[0] == "left"){
                    return 1
                }else {
                    return 0
                }
            }
        }
    },
    mounted(){

        this.Offset()

        document.body.appendChild(this.$refs.tool)

    }
}
</script>
<style lang="less">
@import "tooltips";
</style>
