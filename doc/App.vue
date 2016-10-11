<template>
	<div id="app">
        <navs></navs>
		<div class="main">
			<left-nav></left-nav>
			<div class="container">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script>
import navs from "./components/nav"
import leftNav from "./components/leftNav"
export default {
    components:{
        navs,
		leftNav
    }
}
</script>
<style lang="less">
@import "../components/style/init";
ol,ul {list-style: none;}
html {
}
body {
    margin: 0;
    padding: 0;
    background: #ececec;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, "PingFang SC", "Microsoft Yahei", "WenQuanYi Micro Hei", "\5FAE\8F6F\96C5\9ED1", Arial, Verdana, sans-serif !important;
}
.main {
	padding: 22px 0;
	margin: 0 auto;
	width: 90%;
	background: #fff;
	border-radius: 4px;
	box-sizing: border-box;
	display: flex;
	.container {
		width: 85%;
		padding: 0  42px;
		box-sizing: border-box;
		h1 {
			font-size: 32px;
		}
	}
}
</style>
