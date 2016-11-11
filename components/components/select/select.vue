<template>
    <div class="y-select">
        <div class="y-select-input" @click="clicks" ref="html">
            <span class="default" v-if="value === ''">请选择</span>
            <span v-text="value" v-else></span>
        </div>
        <transition name="y-select">
            <ul class="y-select-dropdown" v-show="show" ref="dropdown">
                <slot v-on:asdfs="asdf"></slot>
            </ul>
        </transition>
    </div>
</template>
<script>
import { In, getLeft, getTop } from "../utils"
export default {
    name:"y-select",
    props:{
        value:{}
    },
    data(){
        return {
            show:false,
            top:0,
            left:0
        }
    },
    mounted(){
        document.addEventListener('click',this.ifEl)
        document.body.appendChild(this.$refs.dropdown)
        window.addEventListener("scroll", this.offset)
        window.addEventListener("resize", this.offset)
        this.offset()
    },
    destroyed(){
        document.body.removeChild(this.$refs.dropdown)
        document.removeEventListener("click", this.ifEl)
        window.removeEventListener("scroll", this.offset)
        window.removeEventListener("resize", this.offset)
    },
    methods:{
        clicks(){
            this.offset()
            if(this.show){
                this.show = false
            } else {
                this.show = true
            }
        },
        close(){
            this.show = false
        },
        on(){
            this.show = true
        },
        offset(){
            let html = [this.$refs.html.offsetHeight,this.$refs.html.offsetWidth]
            let left = getLeft(this.$refs.html)
            let top = getTop(this.$refs.html)
            this.$refs.dropdown.style.top = `${top+html[0]+4}px`
            this.$refs.dropdown.style.left = `${left}px`
            this.$refs.dropdown.style.width = `${this.$refs.html.offsetWidth}px`
        },
        ifEl:function(e){
            if(!this.show) {
                return
            }
            if(!In(e.target, this.$refs.dropdown) && !In(e.target, this.$refs.html)){
                this.show = false
            }
        },
        asdf(){
            console.log(1)
        }
    }
}
</script>
<style lang="less">
@import "select";
</style>