# Pagination

<template>
    <coding
        title="基本"
        content="基础的分页"
        :code="data1"
        lang="html"
    >
        <y-Pagination :total="5"></y-Pagination>
    </coding>
    <coding
        title="超出"
        content="页数多于page-size"
        :code="data2"
        lang="html"
    >
        <y-Pagination :total="15"></y-Pagination>
    </coding>
    <coding
        title="跳转"
        content="添加showQuickJumper"
        :code="data3"
        lang="html"
    >
        <y-Pagination :total="15" show-quick-jumper></y-Pagination>
    </coding>
    <coding
        title="change"
        content="@currentChange在页数发生改变时执行，第一个参数是改变的页数(观察console)"
        :code="data4"
        lang="html"
    >
        <y-Pagination :total="5" @current-change="test"></y-Pagination>
    </coding>
    <coding
        title="simple"
        content="simple模式"
        :code="data5"
        lang="html"
    >
        <y-Pagination :total="5" @current-change="test" simple></y-Pagination>
    </coding>
</template>
<script>
export default {
    data () {
        return {
            data1: `<y-Pagination :total="5"></y-Pagination>`,
            data2: `<y-Pagination :total="15"></y-Pagination>`,
            data3: `<y-Pagination :total="15" show-quick-jumper></y-Pagination>`,
            data4: `<y-Pagination :total="5" @currentChange="test"></y-Pagination>`,
            data5: `<y-Pagination :total="5" @current-change="test" simple></y-Pagination>`
        }
    },
    methods: {
        test (e) {
            console.log(e)
        }
    }
}
</script>

## 参数设置

|       属性      |      说明      |    类型   | 默认值 | 可选值 |
| --------------- | -------------- | --------- | ------ | ------ |
| total           | 总页数         | `Number`  | 1      | -      |
| defaultCurrent  | 默认显示页数   | `Number`  | -      | -      |
| pageSize        | 分页数量       | `Number`  | 5      | -      |
| showQuickJumper | 是否显示跳转栏 | `Boolean` | false  |        |
| simple          | simple模式     | `Boolean` | false  | -      |


## Events

|    事件名称    |      说明      | 回调参数 |
| -------------- | -------------- | -------- |
| current-change | 页数改变时触发 | 当前页   |