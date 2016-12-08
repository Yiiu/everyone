# Collapse 折叠面板

<template>
    <coding
        title="折叠面板"
        content="最简单的折叠面版"
        lan="html"
        :code="code1"
    >
        <y-collapse :default-active-key="[1]" @changes="test">
            <y-panel header="asfaasdfasdf" :col="1">asd</y-panel>
            <y-panel header="asfaasdfasdf" :col="2">asd</y-panel>
        </y-collapse>
    </coding>
    <coding
        title="手风琴"
        content="一次只能打开一个"
        lan="html"
        :code="code2"
    >
        <y-collapse :default-active-key="[1,]" accordion>
            <y-panel header="asfaasdfasdf" :col="1">asd</y-panel>
            <y-panel header="asfaasdfasdf" :col="2">asd</y-panel>
            <y-panel header="asfaasdfasdf" :col="3">asd</y-panel>
        </y-collapse>
    </coding>
</template>
<script>
export default {
    data () {
        return {
            code1: 
`<y-collapse :default-active-key="[1]" @changes="test">
    <y-panel header="asfaasdfasdf" :col="1">asd</y-panel>
    <y-panel header="asfaasdfasdf" :col="2">asd</y-panel>
</y-collapse>
`,
            code2:
`<y-collapse :default-active-key="[1, 3]" accordion>
    <y-panel header="asfaasdfasdf" :col="1">asd</y-panel>
    <y-panel header="asfaasdfasdf" :col="2">asd</y-panel>
    <y-panel header="asfaasdfasdf" :col="3">asd</y-panel>
</y-collapse>`
        }
    },
    methods: {
        test (value) {
            console.log(value)
        }
    }
}
</script>

## 参数设置

### Collapse

|       属性       |       说明      |    类型   | 默认值  | 可选值 |
| ---------------- | --------------- | --------- | ------- | ------ |
| defaultActiveKey | 默认打开的panel | `Array`   | -       | -      |
| accordion        | 手风琴          | `Boolean` | `false` | -      |

### Panel

|  属性  |         说明         |   类型   | 默认值 | 可选值 |
| ------ | -------------------- | -------- | ------ | ------ |
| col    | 键值，必须，不能重复 | `Number` | -      | -      |
| header | 面板头内容，必须     | `String` | -      | -      |

## Events

|  事件名称 |       说明       |     回调参数     |
| --------- | ---------------- | ---------------- |
| changes   | 改变时触发       | 打开的panel的col |