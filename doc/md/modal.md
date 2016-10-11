# modal

<template>
    <y-button type="primary" @click.native="test">sss</y-button>
</template>

<script>
export default {
    methods:{
        test(){
            this.$modal({
                "title":"teststs",
                "content":"你好呀世界",
            }).then((value)=>{
                this.$notify("确认")
            }).catch((value)=>{
                this.$notify("取消")
            })
        }
    }
}
</script>

## 用法

```js
this.$modal({
    "title":"teststs",
    "content":"你好呀世界",
}).then((value)=>{      // 确认回调
    this.$notify("确认")
}).catch((value)=>{     // 取消回调
    this.$notify("取消")
})
```


|   属性  |         说明         |    类型    |          默认值           | 可选值 |
| ------- | -------------------- | ---------- | ------------------------- | ------ |
| title   | 标题                 | `String`   | -                         | -      |
| content | 内容                 | `String`   | -                         | -      |
| vis     | 按钮事件是否默认关闭 | `Boolean`  | `true`                    | -      |
| okBtn   | 右边按钮选项         | `Object`   | `{show:true,text:"确认"}` | -      |
| backBtn | 左边按钮选项         | `Object`   | `{show:true,text:"取消"}` | -      |
| .then   | 右边按钮回调事件     | `Function` | -                         | -      |
| .catch  | 右边按钮回调时间     | `Function` | -                         | -      |
