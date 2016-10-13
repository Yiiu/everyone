<template>
    <div class="y-tooltip"
    >
        <span class="y-tooltip-html">
            <slot name="html"></slot>
        </span>
        <template>
            <transition name="opacity">
                <div class="y-tooltips"
                    ref="tool"
                    :class="classNames"
                    v-show="show"
                >
                    <div class="y-tooltips-delta"></div>
                    <div class="y-tooltips-box" :class="{slot: $slots.content}">
                        <span v-text="content" v-if="!$slots.content"></span>
                        <slot name="content"></slot>
                    </div>
                </div>
            </transition>
        </template>
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
    mounted(){

        this.Offset()

        this.events()


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
        Open(){
            if(this.show){
                this.close()
            }else {
                this.on()
            }
        },
        close(){
            this.show = false
        },
        // 绑定事件，hover，click，focus
        events(){
            let slot = this.$slots.html[0].elm
            let that = this
            if(this.trigger == "click"){
                slot.addEventListener("click",this.Open)
            }else if(this.trigger == "hover") {
                this.$refs.tool.addEventListener("mouseover", ()=>{
                    clearTimeout(that.Timer);
                })
                this.$refs.tool.addEventListener("mouseout", ()=>{
                    that.Timer = setTimeout(()=>{
                        that.show = false
                    }, 100)
                })
                slot.addEventListener("mouseover", this.Open)
                slot.addEventListener("mouseout", ()=>{
                    that.Timer = setTimeout(()=>{
                        that.show = false
                    }, 100)
                })
            }else if(this.trigger == "focus"){
                slot.addEventListener("focus", this.on)
                slot.addEventListener("blur", this.close)
            }

        },
        ifEl:function(e){
            if(!this.show) {
                return
            }
            if(!In(e.target, this.$refs.tool) && !In(e.target, this.$slots.html[0].elm)){
                this.show = false
            }
        },
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
    watch:{
        "show":function(value){
            if(value) {
                if(this.trigger == "click"){
                    document.addEventListener('click',this.ifEl)
                }
            }else {
                document.removeEventListener("click", this.ifEl)
            }
        }
    }
}
</script>
<style lang="less">
@import "tooltips";
</style>
