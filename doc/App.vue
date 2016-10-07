<template>
	<div id="app">
        <navs></navs>
		<div class="main"><router-view></router-view></div>
	</div>
</template>
<script>
import navs from "./components/nav"
export default {
    components:{
        navs    
    }
}
</script>
<style lang="less">
@import "../client/style/init";
ol,ul {list-style: none;}  
html {
}
body {
    margin: 0;
    padding: 0;
    background: #ececec;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, "PingFang SC", "Microsoft Yahei", "WenQuanYi Micro Hei", "\5FAE\8F6F\96C5\9ED1", Arial, Verdana, sans-serif !important;
}
</style>