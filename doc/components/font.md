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
                    <h4>主标题 加粗 #e6e6e6 18px</h4>
                </th>
            </tr>
            <tr>
                <th>
                    正文 (p)
                </th>
                <th>
                    <p>主标题 加粗 #666 18px</p>
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
