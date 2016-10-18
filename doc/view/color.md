# 色彩

### 默认

<template>
    <div class="color">
        <color-box :name="datas.name" :color="datas.color" :content="datas.content" v-for="datas in initColor"></color-box>
    </div>
</template>



<script>
import colorBox from "../../../doc/components/color-box"
export default {
    components:{
        colorBox
    },
    data(){
        return{
            initColor:[
                {
                    name:"gray",
                    color:"#ccc",
                    content:"一般用在失效或者不可点击区域。"
                },
                {
                    name:"blue",
                    color:"#47b8e0",
                    content:"一般用在成功提示或者信息提示。"
                },
                {
                    name:"green",
                    color:"#67D5B5",
                    content:"一般用在成功提示。"
                },
                {
                    name:"yellow",
                    color:"#ffc952",
                    content:"一般用在提示。"
                },
                {
                    name:"red",
                    color:"#ff7473",
                    content:"一般用在警告。"
                },
                {
                    name:"bColor",
                    color:"#e9e9e9",
                    content:"用作分割线，或者边框。"
                },
                {
                    name:"pColor",
                    color:"#666",
                    content:"默认字体颜色。"
                },
            ]
        }
    }
}
</script>
<style lang="less">
.color {
    display: flex;
    flex-wrap: wrap;
}
</style>
