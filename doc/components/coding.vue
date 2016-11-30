<template>
  <div class="coding-box">
        <div class="coding-content">
            <slot></slot>
        </div>
        <div class="coding-bottom">
            <span class="coding-title" v-text="title"></span>
            <p class="note" v-text="content"></p>
            <div class="coding-button">
                <y-svg type="arrow" :class="{top:codeShow}" @click.native="dom" :width="16"></y-svg>
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
import hljs from 'highlight.js'
export default {
    name: 'coding',
    data () {
        return {
            codeShow: false
        }
    },
    props: {
        code: String,
        title: String,
        content: String
    },
    mounted () {
        this.$nextTick(() => {
            hljs.highlightBlock(this.$refs.code)
        })
    },
    methods: {
        dom () {
            if (this.codeShow) {
                this.codeShow = false
            } else {
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
        p.note {
            margin: 0;
        }
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
            top: 20px;
            font-size: 20px;
            svg {
                transition: .3s all;
                &.top {
                    transform: rotateZ(180deg);
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
