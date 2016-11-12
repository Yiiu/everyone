# Select

<template>
    <coding
        title="基础"
        content="简单的select"
        :code="data"
    >
        <y-select v-model="a">
            <y-option value="a">a</y-option>
            <y-option value="b">b</y-option>
            <y-option value="c">c</y-option>
        </y-select>
    </coding>
    <coding
        title="清除选项"
        content="在y-select中，设定clearable值，即可显示清除按钮"
        :code="data1"
    >
        <y-select v-model="b" clearable>
            <y-option value="a">a</y-option>
            <y-option value="b">b</y-option>
            <y-option value="c">c</y-option>
        </y-select>
    </coding>
    <coding
        title="禁用选项"
        content="在y-option中，设定disabled值，即可禁用改选项"
        :code="data2"
    >
        <y-select v-model="c">
            <y-option value="a" disabled>a</y-option>
            <y-option value="b">b</y-option>
            <y-option value="c">c</y-option>
        </y-select>
    </coding>
    <coding
        title="禁用select"
        content="在y-select中，设定disabled值，即可禁用改选项"
        :code="data2"
    >
        <y-select v-model="c" disabled>
            <y-option value="a" disabled>a</y-option>
            <y-option value="b">b</y-option>
            <y-option value="c">c</y-option>
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
    <y-option value="a">a</y-option>
    <y-option value="b">b</y-option>
    <y-option value="c" disabled>c</y-option>
</y-select>`,
data1:
`<y-select v-model="value"  clearable>
    <y-option value="a">a</y-option>
    <y-option value="b">b</y-option>
    <y-option value="c" disabled>c</y-option>
</y-select>`,
data2:
`<y-select v-model="value">
    <y-option value="a" disabled>a</y-option>
    <y-option value="b">b</y-option>
    <y-option value="c">c</y-option>
</y-select>`
        }
    }
}
</script>