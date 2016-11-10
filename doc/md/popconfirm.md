# popconfirm


<template>
    <coding
        :code="datas"
        title="popconfirm"
        content="这样做相比modal会更简洁。"
    >
        <y-popconfirm
            title="是否删除该文件？"
            :ok-cbk="dels1"
        >
            <y-button slot="html">hello</y-button>
        </y-popconfirm>
    </coding>
    <coding
        :code="data1"
        title="popconfirm"
        content="自定义按钮，可以应用更强的逻辑"
    >
        <y-popconfirm
            title="是否删除该文件？"
            v-model="test"
        >
            <y-button slot="html">hello</y-button>
            <div class="footer" slot="btn">
                <y-button slot="btn" type="ghost" @click.native="test = false">取消</y-button>
                <y-button slot="btn" @click.native="test = false">确认</y-button>
            </div>
        </y-popconfirm>
    </coding>
</template>
<script>
export default {
    data(){
        return {
            test:false,
datas:
`<template>
    <y-popconfirm
        title="是否删除该文件？"
        :ok-cbk="dels1"
    >
        <y-button slot="html">hello</y-button>
    </y-popconfirm>
</template>
`,
data1:
`<y-popconfirm
    title="是否删除该文件？"
    v-model="test"
>
    <y-button slot="html">hello</y-button>
    <div class="footer" slot="btn">
        <y-button slot="btn" type="ghost" @click.native="test = false">取消</y-button>
        <y-button slot="btn" @click.native="test = false">确认</y-button>
    </div>
</y-popconfirm>`
        }
    },
    methods:{
        dels1(){
            this.$notify("删除成功")
        }
    }
}
</script>


|    属性    |       说明       |   类型   |          默认值           |                                                    可选值                                                     |
| ---------- | ---------------- | -------- | ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| slot::html | 触发目标（必须） | `slot`   | -                         | -                                                                                                             |
| slot::btn  | 底部按钮         | `slot`   | -                         | -                                                                                                             |
| title      | 标题             | `String` | -                         | -                                                                                                             |
| trigger    | 触发事件         | `String` | `click`                   | `click`,`hover`,`focus`                                                                                       |
| placement  | 气泡位置         | `String` | `top`                     | `top`,`top-left`,`top-right`,`bottom-left`,`bottom-right`,`left-top`,`left-bottom`,`right-top`,`right-bottom` |
| okBtn      | 确认键按钮选项   | `Object` | `{show:true,text:"确认"}` | -                                                                                                             |
| okBtn      | 确认键按钮选项   | `Object` | `{show:true,text:"确认"}` | -                                                                                                             |
