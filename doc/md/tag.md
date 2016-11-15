# tag

<template>
    <coding
        title="普通的"
        content="有5种样式"
        :code="data1"
    >
        <y-tag type="info">info</y-tag>
        <y-tag type="success">success</y-tag>
        <y-tag type="warning">warning</y-tag>
        <y-tag type="danger">danger</y-tag>
        <y-tag type="gray">gray</y-tag>
    </coding>
    <coding
        title="关闭按钮"
        content="加上closable属性"
        :code="data2"
    >
        <y-tag 
            type="info"
            closable
        >info</y-tag>
        <y-tag type="success" closable>success</y-tag>
        <y-tag type="warning" closable>warning</y-tag>
        <y-tag type="danger" closable>danger</y-tag>
        <y-tag type="gray" closable>gray</y-tag>
    </coding>
    <coding
        title="tag组"
        content="多个tag"
        :code="data3"
    >
        <transition-group name="y-tag">
            <y-tag 
                type="gray" 
                closable 
                v-for="(tags, index) in tag" 
                :close="del.bind(this,index)"
                :key="tags.key"
            >{{tags.name}}</y-tag>
        </transition-group>
        <y-button @click.native="add">添加</y-button>
    </coding>
</template>
<script>
export default {
    data(){
        return {
            tag:[
                {
                    key:1,
                    name:"test"
                },
                {
                    key:2,
                    name:"test"
                },
                {
                    key:3,
                    name:"test"
                },
            ],
            key:3,
data1:
`<y-tag type="info">info</y-tag>
<y-tag type="success">success</y-tag>
<y-tag type="warning">warning</y-tag>
<y-tag type="danger">danger</y-tag>
<y-tag type="gray">gray</y-tag>`,
data2:
`<y-tag type="info" closable>info</y-tag>
<y-tag type="success" closable>success</y-tag>
<y-tag type="warning" closable>warning</y-tag>
<y-tag type="danger" closable>danger</y-tag>
<y-tag type="gray" closable>gray</y-tag>`,
data3:
`<transition-group name="y-tag">
    <y-tag 
        type="gray" 
        closable 
        v-for="(tags, index) in tag" 
        :close="del.bind(this,index)"
        :key="tags.key"
    >{{tags.name}}</y-tag>
</transition-group>`
        }
    },
    methods:{
        add(){
            this.key++
            this.tag.push({key:this.key,name:`test${this.key}`})
        },
        del(i){
            this.tag.splice(i, 1)
        }
    }
}
</script>

## 参数设置

|   属性   |     说明     |    类型    | 默认值  |                   可选值                    |
| -------- | ------------ | ---------- | ------- | ------------------------------------------- |
| type     | 样式         | `String`   | -       | `info`, `success`,`warning`,`danger`,`gray` |
| closable | 删除按钮     | `Boolean`  | `false` | -                                           |
| close    | 删除按钮回调 | `Function` | -       | -                                           |