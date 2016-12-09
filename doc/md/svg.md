# SVG

### 使用方法

``` html
<y-tag type="{{type}}"></y-tag>
```

###

<template>
    <div class="svg">
        <div class="svg-item">
            <div class="content">
                <y-svg></y-svg>
            </div>
            <p>info</p>
        </div>
        <div class="svg-item">
            <div class="content">
                <y-svg type="loading"></y-svg>
            </div>
            <p>loading</p>
        </div>
        <div class="svg-item">
            <div class="content">
                <y-svg type="checkmark"></y-svg>
            </div>
            <p>checkmark</p>
        </div>
        <div class="svg-item">
            <div class="content">
                <y-svg type="help"></y-svg>
            </div>
            <p>help</p>
        </div>
        <div class="svg-item">
            <div class="content">
                <y-svg type="close"></y-svg>
            </div>
            <p>close</p>
        </div>
        <div class="svg-item">
            <div class="content">
                <y-svg type="x"></y-svg>
            </div>
            <p>x</p>
        </div>
        <div class="svg-item">
            <div class="content">
                <y-svg type="v"></y-svg>
            </div>
            <p>v</p>
        </div>
        <div class="svg-item">
            <div class="content">
                <y-svg type="check"></y-svg>
            </div>
            <p>check</p>
        </div>
        <div class="svg-item">
            <div class="content">
                <y-svg type="reload"></y-svg>
            </div>
            <p>reload</p>
        </div>
        <div class="svg-item">
            <div class="content">
                <y-svg type="arrow"></y-svg>
            </div>
            <p>arrow</p>
        </div>
        <div class="svg-item">
            <div class="content">
                <y-svg type="more"></y-svg>
            </div>
            <p>more</p>
        </div>
        <div class="svg-item">
            <div class="content">
                <y-svg type="vv"></y-svg>
            </div>
            <p>vv</p>
        </div>
    </div>
</template>
<style lang="less">
.svg {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border: ;
    .svg-item {
        transition: 0.3s all;
        cursor: pointer;
        padding: 12px;
        text-align: center;
        min-width: 16.66666666%;
        border-radius: 12px;
        &:hover {
            background: #eaf8fe;
            .content {
                svg {
                    width: 46px;
                }
            }
        }
        .content {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;
            svg {
                transition: 0.3s all;
                width: 38px;
            }
        }
    }
}
</style>