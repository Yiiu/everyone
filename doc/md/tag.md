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
        :code="data1"
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
</template>
<script>
export default {
    data(){
        return {
data1:
`<y-tag type="info">info</y-tag>
<y-tag type="success">success</y-tag>
<y-tag type="warning">warning</y-tag>
<y-tag type="danger">danger</y-tag>
<y-tag type="gray">gray</y-tag>`,
data2:
`<y-tag type="success" closable>success</y-tag>
<y-tag type="warning" closable>warning</y-tag>
<y-tag type="danger" closable>danger</y-tag>
<y-tag type="gray" closable>gray</y-tag>`,
        }
    }
}
</script>