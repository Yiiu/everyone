<template>
    <div id="app">
        <navs></navs>
        <div class="main">
            <left-nav></left-nav>
            <div class="container md">
                <transition name="opacity" mode="out-in">
                <router-view></router-view>
                </tranisition>
            </div>
        </div>
    </div>
</template>
<script>
import navs from './components/nav'
import leftNav from './components/leftNav'
export default {
    components: {
        navs,
        leftNav
    }
}
</script>
<style lang="less">
@import "../components/style/init";
ol,ul {list-style: none;}
html {
}
body {
    margin: 0;
    padding: 0;
    background: #ececec;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, "PingFang SC", "Microsoft Yahei", "WenQuanYi Micro Hei", "\5FAE\8F6F\96C5\9ED1", Arial, Verdana, sans-serif !important;
    overflow-y: scroll;
}
.main {
    margin: 0 auto;
    width: 90%;
    background: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    margin-bottom: 32px;
    .container {
        width: 75%;
        padding: 22px 42px;
        box-sizing: border-box;
        border-left: 1px #e9e9e9 solid;
    }
}
.md {
    margin-bottom: 62px;
    padding-top: 1px;
    * {
        font-size: 16px;
        text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
    }
    font-size: 16px;
    h1,h2,h3,h4,h5,h6 {
        font-weight: 400;
        margin: 0;
        margin-bottom: 24px !important;
    }
    h1 {
        font-size: 28px;
        line-height: 40px;
        margin-bottom: 24px;
        margin-top: 8px;
    }
    h2 {
        font-size: 22px;
        margin-top: 24px;
    }
    h3 {
        font-size: 18px;
        margin-top: 24px;
    }
    h4 {
        font-size: 16px;
        margin-top: 24px;
    }
    h5 {
        font-size: 14px;
        margin-top: 24px;
    }
    h6 {
        font-size: 12px;
        margin-top: 24px;
    }
    ul {
        li {
            list-style-type: disc;
            margin-left: 20px;
            padding-left: 4px;
            line-height: 24px;
            li {
                list-style-type: circle;
            }
        }
    }
    ol {
        list-style-type: decimal;
        padding-left: 24px;
    }
    hr {
        display: block;
        border: none;
        background: #e7e7e7 repeating-linear-gradient(-45deg,#fff,#fff .25rem,transparent .25rem,transparent .5rem);
    }
    p {
        margin: 1em 0;
        font-size: 16px;
        line-height: 1.6;
    }
    pre {
        background-color: #f7f7f7;
        padding: 12px;
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 18px;
        box-shadow: 0px 2px 0px rgba(170,170,170,0.1);
        border-radius: 4px;
        padding: 1em;
        margin: 1.2em 0;
    }
    img {
        display: block;
        transition: 0.3s all;
    }
    img.emoji {
        display: inline-block;
        height: 1.2em;
        vertical-align: sub;
        width: auto;
        margin: 0;
    }
    table{
        font-size: 16px;
        border:1px solid #e9e9e9;
        width: 100%;
        overflow: auto;
    }
    table thead{
        background:#f7f7f7
    }
    table thead tr{
        border-bottom:1px solid #e9e9e9
    }
    table thead tr th{
        padding: 6px 4px;
        border-left:1px solid #e9e9e9
    }
    table tbody tr{
        border-bottom:1px solid #e9e9e9
    }
    table tbody tr td{
        padding:12px 18px;
        border-left:1px solid #e9e9e9;
        min-width: 120px;
    }
    img {
        width: 106%;
        margin-left: -3%;
        transform-origin: 50% 25%;
        max-width: 100%;
        max-height: 650px;
        &.opens-mask {
            position: relative;
            z-index: 9999;
            cursor: zoom-out;
        }
    }
    blockquote {
        padding: 12px 20px;
        margin: 0 0 10px;
        font-size: 90%;
        border-left: 5px solid #eee;
        color: #999;
        margin: 1em 0;
        p {
            color: fade(#000, 60%);
            padding: 0;
            margin: 0;
        }
    }
    code {
        background-color: fade(#000, 4%);
        padding: 2px 4px;
        border-radius: 2px;
        font-size: 90%;
        color: fade(#000, 70%);
    }
    pre code {
        padding: 0;
        font-size: inherit;
        color: inherit;
        white-space: pre;
        background-color: transparent;
        border-radius: 0;
    }
}
@media screen and (max-width:768px) {
    .main {
        flex-direction: column;
        width: 100%;
        border-radius: 0;
        .container {
            width: 100%;
        }
    }

}
</style>
