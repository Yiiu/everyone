<template>
  <div class="coding-box">
        <div class="coding-content">
            <slot></slot>
        </div>
        <div class="coding-bottom">
            <span class="coding-title" v-text="title"></span>
            <p class="note" v-text="content"></p>
            <div class="coding-button">
                <i class="ion-arrow-down-b" @click="dom" :class="{top:codeShow}"></i>
            </div>
        </div>
        <transition name="code">
            <div class="coding-code" ref="code" v-show="codeShow">
                <pre><code>{{code}}</code></pre>
            </div>
        </transition>
  </div>
</template>
<script>
import hljs from "highlight.js"
export default {
    name:"coding",
    data(){
        return {
            codeShow:false
        }
    },
    props:{
        code:String,
        title: String,
        content:String,
    },
    mounted () {
        /*console.log(this)
        let children = this.$slots.default[0].elm

        children = Array.prototype.filter.call(children, function (node) {
            return node.nodeType === 1
        })
         fixme 暂时没有处理文本节点
        let code = children.map(function (dom) {
        return dom.outerHTML.replace(/\t| {4}/g, '')
        }).join('\n')
        console.log(code)
        if (!this.code) {
            this.code = this.$slots.default.map(function (dom) {
                return dom.elm.outerHTML.replace(/\t| {4}/g, '')
            }).join('\n')
        }
        this.$refs.code.innerText = this.code*/
        let node = document.createElement("div")
        hljs.highlightBlock(this.$refs.code)
    },
    methods: {
        dom(){
            if(this.codeShow){
                this.codeShow = false
            }else {
                this.codeShow = true
            }
        }
    },
    components: {}
}
</script>

<style lang="less">
.coding-box {
    width: 100%;
    border: 1px solid #e9e9e9;
    border-radius: 6px;
    margin-bottom: 16px;
    transition: box-shadow .2s;
    .coding-content {
        padding: 22px;
        border-bottom: 1px solid #e9e9e9;
    }
    .coding-bottom {
        padding: 16px 22px;
        position: relative;
        .coding-title {
            height: 20px;
            line-height: 20px;
            position: absolute;
            top: -10px;
            left: 12px;
            background: #fff;
            padding: 0 12px;
        }
        .coding-button {
            cursor: pointer;
            position: absolute;
            height: 20px;
            line-height: 20px;
            right: 16px;
            bottom: 16px;
            font-size: 20px;
            i {
                &:before {
                    transition: .3s all;
                }
                &.top {
                    &:before {
                        transform: rotateZ(180deg);
                    }
                }
            }
        }
    }
    .coding-code {
        max-height: 400px;
        overflow: auto;
        height: auto;
        transition: .3s all;
        border-top: 1px dashed #e9e9e9;
        pre {
            background: #fff;
        }
    }
    &:hover {
        box-shadow: 0 2px 20px -5px #ccc;
    }
}
.code-enter-active {
  transition: height .3s ease;
}
.code-leave-active {
  transition: height .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.code-enter, .code-leave-active {
    max-height: 0 !important;
}

</style>
