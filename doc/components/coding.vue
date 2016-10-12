<template>
  <div class="coding-box">
        <div class="coding-content">
            <slot></slot>
        </div>
        <div class="coding-bottom">
            <span class="coding-title">sasd</span>
            <p class="note">
                最简单的用法，4.5 秒后自动关闭。
            </p>
            <div class="coding-button">
                <i class="ion-arrow-down-b" @click="dom"></i>
            </div>
        </div>
        <div class="coding-code">
            <pre><code class="html" ref="code">var a = "asdf"</code></pre>
        </div>
  </div>
</template>
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
        }
    }
    &:hover {
        box-shadow: 0 2px 20px -5px #ccc;
    }
}
</style>
<script>
export default {
    name:"coding",
    data () {
        return {
            code:""
        }
    },
    mounted () {

        console.log(this)
        let children = this.$slots.default[0].elm

        children = Array.prototype.filter.call(children, function (node) {
            return node.nodeType === 1
        })
        // fixme 暂时没有处理文本节点
        let code = children.map(function (dom) {
        return dom.outerHTML.replace(/\t| {4}/g, '')
        }).join('\n')
        console.log(code)
        if (!this.code) {
            this.code = this.$slots.default.map(function (dom) {
                return dom.elm.outerHTML.replace(/\t| {4}/g, '')
            }).join('\n')
        }
        this.$refs.code.innerText = this.code
    },
    methods: {
        dom(){
            let node = document.createElement("div")
            hljs.highlightBlock(this.$refs.code)
        }
    },
    components: {}
}
</script>

<style lang="css">
</style>
