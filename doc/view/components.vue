<template>
    <div class="components">
        <h1>Components</h1>
        <ul>
            <li v-for="item in data">
                {{item.title}}
                <ul>
                    <router-link :to="list.path" v-if="item.components" v-for="list in item.components" exact>
                        <li>
                            {{list.name}}
                            <span class="cn">{{list.cn}}</span>
                        </li>
                    </router-link>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
import datas from '../nav.config.json'
export default {
    data () {
        return {
            data: datas.leftnav[3].child
        }
    }
}
</script>
<style lang="less">
.components {
    ul {
        li {
            margin-top: 6px;
            margin-bottom: 6px;
            span.cn {
                font-size: 10px;
                color: #99a9bf;
                margin-left: 6px;
            }
            a {
                color: #108ee9;
                text-decoration: none;
            }
        }
    }
}
</style>