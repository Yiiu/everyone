# 字体

``` css
font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
```

<template>
    <table class="test">
        <thead align="left">
            <tr>
                <th>
                    类型
                </th>
                <th>
                    样式
                </th>
            </tr>
        </thead>
        <tbody align="left">
            <tr>
                <th>
                    主标题 (h2)
                </th>
                <th>
                    <h2>主标题 加粗 #e6e6e6 24px</h2>
                </th>
            </tr>
            <tr>
                <th>
                    次级标题 (h3)
                </th>
                <th>
                    <h3>主标题 加粗 #e6e6e6 18px</h3>
                </th>
            </tr>
            <tr>
                <th>
                    小标题 (h4)
                </th>
                <th>
                    <h4>主标题 加粗 #e6e6e6 16px</h4>
                </th>
            </tr>
            <tr>
                <th>
                    正文 (p)
                </th>
                <th>
                    <p>正文 加粗 #666 16px</p>
                </th>
            </tr>
            <tr>
                <th>
                    链接 (a)
                </th>
                <th>
                    <a>链接 #47b8e0 16px</a>
                </th>
            </tr>
            <tr>
                <th>
                    辅助文字 (p.note)
                </th>
                <th>
                    <p class="note">辅助文字 #999 14px</p>
                </th>
            </tr>
            <tr>
                <th>
                    失效 (p.lose)
                </th>
                <th>
                    <p class="lose">失效 #ccc 14px</p>
                </th>
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
            padding: 2px 0;
        }
    }
    th {
        padding: 10px 0;
    }
}
</style>
