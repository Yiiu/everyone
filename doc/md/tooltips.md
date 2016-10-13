# tooltips

<template>
    <y-tooltips content="fsdf">
        <y-button slot="html">blue</y-button>
    </y-tooltips>
    <y-tooltips>
    	<y-button slot="html">blue</y-button>
        <div slot="content">
            <ul>
                <li>safasdf</li>
                <li>safasdf</li>
                <li>safasdf</li>
            </ul>
        </div>
    </y-tooltips>
    <y-tooltips
        placement="top"
        trigger="hover"
        content="stset"
        theme="white"
    >
    	<y-button slot="html">blue</y-button>
        <div slot="content">
            <ul>
                <li>safasdf</li>
                <li>safasdf</li>
                <li>safasdf</li>
            </ul>
        </div>
    </y-tooltips>
    <y-tooltips
        placement="top"
        trigger="focus"
        content="stset"
        theme="white"
    >
    	<input type="text" name="name" value="" slot="html">
        <div slot="content">
            <ul>
                <li>safasdf</li>
                <li>safasdf</li>
                <li>safasdf</li>
            </ul>
        </div>
    </y-tooltips>
</template>

|    属性   |       说明       |   类型   | 默认值  |                                                    可选值                                                     |
| --------- | ---------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| content   | 气泡内容         | `String` | -       | -                                                                                                             |
| placement | 气泡位置         | `String` | `top`   | `top`,`top-left`,`top-right`,`bottom-left`,`bottom-right`,`left-top`,`left-bottom`,`right-top`,`right-bottom` |
| theme     | 气泡主题         | `String` | `blue`  | `blue`,`black`                                                                                                |
| trigger   | 触发气泡事件名称 | `String` | `click` | `click`,`hover`,`focus`                                                                                       |