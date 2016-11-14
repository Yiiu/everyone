# Select

<template>
    <coding
        title="基础"
        content="简单的select"
        :code="data"
    >
        <y-select v-model="a">
            <y-option value="1" label="a"></y-option>
            <y-option value="2" label="b"></y-option>
            <y-option value="3" label="c"></y-option>
        </y-select>
    </coding>
    <coding
        title="清除选项"
        content="在y-select中，设定clearable值，即可显示清除按钮"
        :code="data1"
    >
        <y-select v-model="b" clearable>
            <y-option value="1" label="a"></y-option>
            <y-option value="2" label="b"></y-option>
            <y-option value="3" label="c"></y-option>
        </y-select>
    </coding>
    <coding
        title="禁用选项"
        content="在y-option中，设定disabled值，即可禁用改选项"
        :code="data2"
    >
        <y-select v-model="c">
            <y-option value="1" label="a" disabled></y-option>
            <y-option value="2" label="b"></y-option>
            <y-option value="3" label="c"></y-option>
        </y-select>
    </coding>
    <coding
        title="禁用select"
        content="在y-select中，设定disabled值，即可禁用改选项"
        :code="data2"
    >
        <y-select v-model="c" disabled>
            <y-option value="1" label="a" disabled></y-option>
            <y-option value="2" label="b"></y-option>
            <y-option value="3" label="c"></y-option>
        </y-select>
    </coding>
</template>
<script>
export default {
    data(){
        return {
            a:"",
            b:"",
            c:"",
data:
`<y-select v-model="value">
    <y-option value="1" label="a"></y-option>
    <y-option value="2" label="b"></y-option>
    <y-option value="3" label="c"></y-option>
</y-select>`,
data1:
`<y-select v-model="value"  clearable>
    <y-option value="a" label="a"></y-option>
    <y-option value="b" label="b"></y-option>
    <y-option value="c" label="c"></y-option>
</y-select>`,
data2:
`<y-select v-model="value" disabled>
    <y-option value="a" label="a" disabled></y-option>
    <y-option value="b" label="b"></y-option>
    <y-option value="c" label="c"></y-option>
</y-select>`
        }
    }
}
</script>

### select

|    属性   |              说明              |    类型   | 默认值  | 可选值 |
| --------- | ------------------------------ | --------- | ------- | ------ |
| v-model   | 绑定的数据（必选）             | `String`  | -       | -      |
| clearable | 是否出现删除按钮               | `Boolean` | `false` | -      |
| disabled  | 是否将该分组下所有选项置为禁用 | `Boolean` | `false` | -      |

### option

|   属性   |                   说明                  |        类型        | 默认值  | 可选值 |
| -------- | --------------------------------------- | ------------------ | ------- | ------ |
| label    | 选项的标签，若不设置则默认与 value 相同 | `String`, `Number` | -       | -      |
| value    | 选项的值                                | `String`, `Number` | -       | -      |
| disabled | 是否禁用该选项                          | `Boolean`          | `false` | -      |