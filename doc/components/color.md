# 色彩

### 颜色

<template>
    <div class="color">
        <div class="color-box">
            <div class="block ccc"></div>
            <div class="color-container">
                <p class="title">灰色</p>
                <p class="all">#ccc,一般用在不明显提示字体</p>
            </div>
        </div>
        <div class="color-box">
            <div class="block blue"></div>
            <div class="color-container">
                <p class="title">蓝色</p>
                <p class="all">#47b8e0,一般用在不明显提示字体</p>
            </div>
        </div>
        <div class="color-box">
            <div class="block green"></div>
            <div class="color-container">
                <p class="title">蓝色</p>
                <p class="all">#67D5B5,一般用在不明显提示字体</p>
            </div>
        </div>
        <div class="color-box">
            <div class="block yellow"></div>
            <div class="color-container">
                <p class="title">蓝色</p>
                <p class="all">#ffc952,一般用在不明显提示字体</p>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.color {
    display: flex;
    flex-wrap: wrap;
    .color-box {
        width: 33.3%;
        display: flex;
        margin-bottom: 16px;
        .color-container {
            margin-left: 16px;
            margin-right: 16px;
            margin-top: 6px;
        }
        p.title {
            text-align: left;
            font-size: 20px;
        }
        p.all {
            font-size: 14px;
        }
        .block {
            width: 100px;
            height: 100px;
            border-radius: 8px;
            &.ccc {
                background: #ccc;
            }
            &.blue {
                background: #47b8e0;
            }
            &.green {
                background: #67D5B5;
            }
            &.yellow {
                background: #ffc952;
            }
        }
    }
}
</style>
