<template>
    <div class="color-box">
        <div class="block" :style="{background:color}"></div>
        <div class="color-container">
            <h2 class="title">{{name}}<span>{{color}}</span></h2>
            <p class="all">{{content}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        color:String,
        name:String,
        content:String
    },
    computed: {},
    mounted () {},
    methods: {},
    components: {}
}
</script>

<style lang="less">

.color-box {
    width: 33.3%;
    min-width: 33.3%;
    display: flex;
    margin-bottom: 16px;
    .color-container {
        margin-left: 16px;
        margin-right: 16px;
        margin-top: 4px;
    }
    h2.title {
        text-align: left;
        font-size: 24px;
        margin: 0;
        margin-bottom: 12px;
        padding: 0;
        font-weight: 400;
        line-height: 1;
        span{
            font-size: 16px;
            color: #999;
            font-weight: 400;
            margin-left: 4px;
        }
    }
    p.all {
        font-size: 14px;
    }
    .block {
        width: 100px;
        height: 100px;
        min-width: 100px;
        border-radius: 8px;
    }
}

@media screen and (max-width:1024px) {
    .color-box {
        width: 50%;
        min-width: 50%;
    }
}
</style>
