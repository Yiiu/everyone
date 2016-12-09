# tooltips

<template>
    <coding
        :code="code1"
        title="简单tooltips"
        content="最简单的tooltips，只有一个content，也可以使用v-tool指令来使用，可以让代码更加清晰"
    >
        <y-tooltips content="我是一个tooltips" class-name="test" placement="bottom-right">
            <y-button slot="slot">最简单的tooltips</y-button>
        </y-tooltips>
        <y-tooltips content="我是一个tooltips" ref="tests">
        </y-tooltips>
        <y-button v-pop:tests>最简单的tooltips</y-button>
    </coding>
    <coding
        :code="code2"
        title="slot:html"
        content="也可以使用slot:html来自定义气泡内容"
    >
        <y-tooltips>
            <y-button slot="slot">blue</y-button>
            <template slot="content">
                <ul>
                    <li>safasdf</li>
                    <li>safasdf</li>
                    <li>safasdf</li>
                </ul>
            </template>
        </y-tooltips>
    </coding>
    <coding
        :code="code3"
        title="皮肤"
        content="有三款皮肤可选blue,dark,white，默认blue."
    >
        <y-tooltips content="我是一个tooltips">
            <y-button slot="slot">蓝色</y-button>
        </y-tooltips>
        <y-tooltips content="我是一个tooltips" theme="dark">
            <y-button slot="slot">黑色</y-button>
        </y-tooltips>
        <y-tooltips content="我是一个tooltips" theme="white">
            <y-button slot="slot">白色</y-button>
        </y-tooltips>
    </coding>
    <coding
        :code="code4"
        title="触发方式"
        content="三种触发方式hover,click,focus，默认click"
    >
        <y-tooltips content="我是一个tooltips" trigger="hover">
            <y-button slot="slot">hover</y-button>
        </y-tooltips>
        <y-tooltips content="我是一个tooltips" trigger="click">
            <y-button slot="slot">click</y-button>
        </y-tooltips>
        <y-tooltips content="我是一个tooltips" trigger="focus">
            <input type="text" name="" slot="slot">
        </y-tooltips>
    </coding>
    <coding
        :code="code5"
        title="给tooltips绑定一个v-model"
        content="可以给tooltips绑定一个v-model来控制tooltips的隐藏显示。"
    >
        <y-tooltips trigger="hover" v-model="datas">
            <y-button slot="slot">hover</y-button>
            <template slot="content">
                <p>小小tooltips   <a @click="datas=false">关闭</a></p>
            </template>
        </y-tooltips>
    </coding>
    <coding
        title="给tooltips绑定一个v-model"
        content="可以给tooltips绑定一个v-model来控制tooltips的隐藏显示。"
    >
        <div class="top toots" style="margin-left: 56px;">
            <y-tooltips trigger="hover" content="sfasfasdf" placement="top">
                <y-button slot="slot">T</y-button>
            </y-tooltips>
            <y-tooltips trigger="hover" content="sfasfasdf" placement="top-left">
                <y-button slot="slot">TL</y-button>
            </y-tooltips>
            <y-tooltips trigger="hover" content="sfasfasdf" placement="top-right">
                <y-button slot="slot">TR</y-button>
            </y-tooltips>
        </div>
        <div class="left toots" style="width: 56px;float: left;">
            <y-tooltips trigger="hover" content="sfasfasdf" placement="left">
                <y-button slot="slot">L</y-button>
            </y-tooltips>
            <y-tooltips trigger="hover" content="sfasfasdf" placement="left-top">
                <y-button slot="slot">LT</y-button>
            </y-tooltips>
            <y-tooltips trigger="hover" content="sfasfasdf" placement="left-bottom">
                <y-button slot="slot">LB</y-button>
            </y-tooltips>
        </div>
        <div class="right toots" style="width: 56px; margin-left: 230px;">
            <y-tooltips trigger="hover" content="sfasfasdf" placement="right">
                <y-button slot="slot">R</y-button>
            </y-tooltips>
            <y-tooltips trigger="hover" content="sfasfasdf" placement="right-top">
                <y-button slot="slot">RT</y-button>
            </y-tooltips>
            <y-tooltips trigger="hover" content="sfasfasdf" placement="right-bottom">
                <y-button slot="slot">RB</y-button>
            </y-tooltips>
        </div>
        <div class="bottom toots" style="margin-left: 56px;">
            <y-tooltips trigger="hover" content="sfasfasdf" placement="bottom">
                <y-button slot="slot">B</y-button>
            </y-tooltips>
            <y-tooltips trigger="hover" content="sfasfasdf" placement="bottom-left">
                <y-button slot="slot">BL</y-button>
            </y-tooltips>
            <y-tooltips trigger="hover" content="sfasfasdf" placement="bottom-right">
                <y-button slot="slot">BR</y-button>
            </y-tooltips>
        </div>
    </coding>
</template>
<style lang="less">
.toots {
    .y-btn {
        width: 52px;
        margin-bottom: 6px;
    }
}
</style>
<script>
export default {
    data(){
        return {
            code1:
`<y-tooltips content="我是一个tooltips">
    <y-button slot="html">最简单的tooltips</y-button>
</y-tooltips>
<y-tooltips content="我是一个tooltips" ref="tests"></y-tooltips>
<y-button v-tool:tests>最简单的tooltips</y-button>
`,
            code2:
`<y-tooltips>
    <y-button slot="html">blue</y-button>
    <template slot="content">
        <ul>
            <li>safasdf</li>
            <li>safasdf</li>
            <li>safasdf</li>
        </ul>
    </template>
</y-tooltips>`,
            code3:
`<y-tooltips content="我是一个tooltips">
    <y-button slot="html">蓝色</y-button>
</y-tooltips>
<y-tooltips content="我是一个tooltips" theme="dark">
    <y-button slot="html">黑色</y-button>
</y-tooltips>
<y-tooltips content="我是一个tooltips" theme="white">
    <y-button slot="html">白色</y-button>
</y-tooltips>`,
            code4:
`<y-tooltips content="我是一个tooltips" trigger="hover">
    <y-button slot="html">hover</y-button>
</y-tooltips>
<y-tooltips content="我是一个tooltips" trigger="click">
    <y-button slot="html">click</y-button>
</y-tooltips>
<y-tooltips content="我是一个tooltips" trigger="focus">
    <input type="text" name="" slot="html">
</y-tooltips>
`,
            code5:
`<y-tooltips trigger="hover" v-model="datas">
    <y-button slot="html">hover</y-button>
    <template slot="content">
        <p>小小tooltips   <a @click="datas=false">关闭</a></p>
    </template>
</y-tooltips>
export default {
    data(){
        datas:true
    }
}
`,
            datas:false
        }
    }
}
</script>

## 参数设置

|     属性     |            说明           |   类型   | 默认值  |                                                    可选值                                                     |
| ------------ | ------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| slot::html   | 触发目标（必须）          | `slot`   | -       | -                                                                                                             |
| slot:content | 气泡内容（与content互斥） | `slot`   | -       | -                                                                                                             |
| content      | 气泡内容                  | `String` | -       | -                                                                                                             |
| placement    | 气泡位置                  | `String` | `top`   | `top`,`top-left`,`top-right`,`bottom-left`,`bottom-right`,`left-top`,`left-bottom`,`right-top`,`right-bottom` |
| theme        | 气泡主题                  | `String` | `blue`  | `blue`,`dark`                                                                                                 |
| trigger      | 触发方式                  | `String` | `click` | `click`,`hover`,`focus`                                                                                       |
| offset       | 偏移量                    | `Number` | `5`     |                                                                                                               |
