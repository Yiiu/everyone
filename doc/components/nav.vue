<template>
    <nav class="doc">
        <div class="box">
            <ul>
                <li v-for="i in data"><router-link :to="i.path">{{i.name}}</router-link></li>
            </ul>
        </div>
    </nav>
</template>
<script>
import navConfig from "../nav.config"
console.log(navConfig)
export default {
    data(){
        return {
            data:[],
        }
    },
    created(){
        this.data = navConfig
    }
}
</script>
<style lang="less">
@height:65px;
nav.doc {
    height: @height;
    width: 100%;
    background: #fff;
    ul {
        margin: 0;
        padding: 0;
        height: @height;
        float: right;
        display: flex;
        li {
            height: @height;
            line-height: @height;
            a {
                transition: all .3s;
                display: block;
                color: #666;
                text-decoration: none;
                font-size: 18px;
                margin: 0 6px;
                padding: 0 6px;
                line-height: @height - 2 ;
                border-bottom: 2px solid transparent;
                &.router-link-active {
                    color: #47b8e0;
                    border-bottom: 2px solid #47b8e0;
                }
                &:hover {
                    color: #47b8e0;
                }
            }
        }
    }
    .box {
        padding: 0 4%;
    }
}
</style>