# 字体

``` css
font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
```

<template>
    <table class="test">
        <thead>
            <tr>
                <th>
                    类型
                </th>
                <th>
                    样式
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    主标题 (h2)
                </td>
                <td>
                    <h2>主标题 加粗 #e6e6e6 24px</h2>
                </td>
            </tr>
            <tr>
                <td>
                    次级标题 (h3)
                </td>
                <td>
                    <h3>主标题 加粗 #e6e6e6 18px</h3>
                </td>
            </tr>
            <tr>
                <td>
                    小标题 (h4)
                </td>
                <td>
                    <h4>主标题 加粗 #e6e6e6 16px</h4>
                </td>
            </tr>
            <tr>
                <td>
                    正文 (p)
                </td>
                <td>
                    <p>正文 加粗 #666 16px</p>
                </td>
            </tr>
            <tr>
                <td>
                    链接 (a)
                </td>
                <td>
                    <a>链接 #47b8e0 16px</a>
                </td>
            </tr>
            <tr>
                <td>
                    辅助文字 (p.note)
                </td>
                <td>
                    <p class="note">辅助文字 #999 14px</p>
                </td>
            </tr>
            <tr>
                <td>
                    失效 (p.lose)
                </td>
                <td>
                    <p class="lose">失效 #ccc 14px</p>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<style lang="less">
.test {
    margin-top: 32px;
    h1,h2,h3,h4,h5 {
        margin: 0;
    }
    thead {
        font-size: 22px;
        th {
            padding: 12px 10px;
        }
    }
    th {
        padding: 12px 10px;
    }
}
</style>
