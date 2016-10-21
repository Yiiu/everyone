# tooltips

<template>
    <coding
        :code="code1"
        title="简单tooltips"
        content="最简单的tooltips，只有一个content"
    >
        <y-tooltips content="我是一个tooltips">
            <y-button slot="html">最简单的tooltips</y-button>
        </y-tooltips>
    </coding>
    <coding
        :code="code2"
        title="slot:html"
        content="也可以使用slot:html来自定义气泡内容"
    >
        <y-tooltips>
            <y-button slot="html">blue</y-button>
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
            <y-button slot="html">蓝色</y-button>
        </y-tooltips>
        <y-tooltips content="我是一个tooltips" theme="dark">
            <y-button slot="html">黑色</y-button>
        </y-tooltips>
        <y-tooltips content="我是一个tooltips" theme="white">
            <y-button slot="html">白色</y-button>
        </y-tooltips>
    </coding>
    <coding
        :code="code4"
        title="触发方式"
        content="三种触发方式hover,click,focus，默认click"
    >
        <y-tooltips content="我是一个tooltips" trigger="hover">
            <y-button slot="html">hover</y-button>
        </y-tooltips>
        <y-tooltips content="我是一个tooltips" trigger="click">
            <y-button slot="html">click</y-button>
        </y-tooltips>
        <y-tooltips content="我是一个tooltips" trigger="focus">
            <input type="text" name="" slot="html">
        </y-tooltips>
    </coding>
    <coding
        :code="code5"
        title="给tooltips绑定一个v-model"
        content="可以给tooltips绑定一个v-model来控制tooltips的隐藏显示。"
    >
        <y-tooltips trigger="hover" v-model="datas">
            <y-button slot="html">hover</y-button>
            <template slot="content">
                <p>小小tooltips   <a @click="datas=false">关闭</a></p>
            </template>
        </y-tooltips>
    </coding>
    <coding
        title="给tooltips绑定一个v-model"
        content="可以给tooltips绑定一个v-model来控制tooltips的隐藏显示。"
    >
        <div class="top">
            <y-tooltips trigger="hover" content="sfasfasdf" placement="top">
                <y-button slot="html">top</y-button>
            </y-tooltips>
            <y-tooltips trigger="hover" content="sfasfasdf" placement="top-left">
                <y-button slot="html">top-left</y-button>
            </y-tooltips>
            <y-tooltips trigger="hover" content="sfasfasdf" placement="top-right">
                <y-button slot="html">top-right</y-button>
            </y-tooltips>
        </div>
        <div class="bottom">
            <y-tooltips trigger="hover" content="sfasfasdf" placement="bottom">
                <y-button slot="html">bottom</y-button>
            </y-tooltips>
            <y-tooltips trigger="hover" content="sfasfasdf" placement="bottom-left">
                <y-button slot="html">bottom-left</y-button>
            </y-tooltips>
            <y-tooltips trigger="hover" content="sfasfasdf" placement="bottom-right">
                <y-button slot="html">bottom-right</y-button>
            </y-tooltips>
        </div>
        <div class="left">
            <y-tooltips trigger="hover" content="sfasfasdf" placement="left">
                <y-button slot="html">left</y-button>
            </y-tooltips>
            <y-tooltips trigger="hover" content="sfasfasdf" placement="left-top">
                <y-button slot="html">left-top</y-button>
            </y-tooltips>
            <y-tooltips trigger="hover" content="sfasfasdf" placement="left-bottom">
                <y-button slot="html">left-bottom</y-button>
            </y-tooltips>
        </div>
        <div class="right">
            <y-tooltips trigger="hover" content="sfasfasdf" placement="right">
                <y-button slot="html">right</y-button>
            </y-tooltips>
            <y-tooltips trigger="hover" content="sfasfasdf" placement="right-top">
                <y-button slot="html">right-top</y-button>
            </y-tooltips>
            <y-tooltips trigger="hover" content="sfasfasdf" placement="right-bottom">
                <y-button slot="html">right-bottom</y-button>
            </y-tooltips>
        </div>
    </coding>
</template>
<script>
export default {
    data(){
        return {
            code1:
`<y-tooltips content="我是一个tooltips">
    <y-button slot="html">最简单的tooltips</y-button>
</y-tooltips>
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






| 属性         | 说明                      | 类型     | 默认值  | 可选值                                                                                                        |
| ---------    | ----------------          | -------- | ------- | -------------------                                                                                           |
| slot::html    | 触发目标（必须）          | `slot`   | -       | -                                                                                                             |
| slot:content | 气泡内容（与content互斥） | `slot`   | -       | -                                                                                                             |
| content      | 气泡内容                  | `String` | -       | -                                                                                                             |
| placement    | 气泡位置                  | `String` | `top`   | `top`,`top-left`,`top-right`,`bottom-left`,`bottom-right`,`left-top`,`left-bottom`,`right-top`,`right-bottom` |
| theme        | 气泡主题                  | `String` | `blue`  | `blue`,`dark`                                                                                                 |
| trigger      | 触发方式                  | `String` | `click` | `click`,`hover`,`focus`                                                                                       |
