# popover

<template>
    <coding :code="code" title="popover" content="简单的popover，可以内嵌html。">
        <y-popover title="Title">
            <span slot="html">123</span>
            <template slot="content">
                <p>
                    asdfasdf
                </p>
                <p>
                    asdfasdf
                </p>
            </template>
        </y-popover>
    </coding>
</template>
<script>
export default {
    data(){
        return {
            code:
`<y-popover title="Title">
    <span slot="html">123</span>
    <template slot="content">
        <p>asdfasdf</p>
        <p>asdfasdf</p>
    </template>
</y-popover>`
        }
    }
}
</script>

|    属性   |       说明       |   类型   | 默认值  |                                                    可选值                                                     |
| --------- | ---------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| title     | 气泡标题（必须） | `String` | -       | -                                                                                                             |
| trigger   | 触发气泡事件名称 | `String` | `click` | `click`,`hover`,`focus`                                                                                       |
| placement | 气泡位置         | `String` | `top`   | `top`,`top-left`,`top-right`,`bottom-left`,`bottom-right`,`left-top`,`left-bottom`,`right-top`,`right-bottom` |
