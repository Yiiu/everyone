<template>
	<div class="y-editor">
		<div class="y-editor-toolbar">
			<button @click="bold"><i>B</i></button>
			<span><i>i</i></span>
		</div>
		<div class="y-editor-content" ref="edit"></div>
	</div>
</template>
<script>
export default {
	name:"y-editor",
	data(){
		return{
			select:null,
			range:null,
			selection:null,
		}
	},
	mounted(){
		this.$refs.edit.contentEditable = "true"
		document.addEventListener("selectionchange", this.init, false)
	},
	methods:{
		init(){
	        this.selection = window.getSelection && window.getSelection();
			this.range = this.selection.getRangeAt(0);
			if(!this.range.collapsed){
				this.selections(this.range)

			}
		},
		// 选中文档
		selections(range){

			console.log(range)
			let selectionStart = range.startOffset 		// 选中区域的左边界

			let selectionEnd = range.endOffset

			let node = range.endContainer

			let text = node.data.substring(selectionStart, selectionEnd)

			this.select = text
		},
		// 插入粗体
		bold(){
			/**
			 * 在添加样式的时候
			 * 给el添加一个属性type
			 * 判断是否有这个属性
			 * 假如有这个属性的话酒吧原有的此样式删除掉，没有就添加
			 */
			if(this.range.commonAncestorContainer.type !== "bold"){
			    document.execCommand("Bold", false, true);
				this.range.commonAncestorContainer.data = "**" + this.range.commonAncestorContainer.data + "**"
				this.range.commonAncestorContainer.type = "bold"
			}else {
				this.range.commonAncestorContainer.data = this.range.commonAncestorContainer.data.substring(2, this.range.commonAncestorContainer.data.length - 2)
			    document.execCommand("removeFormat", false, true);
			    this.range.commonAncestorContainer.type = ""
			} 
			// this.range.baseNode.execCommand("bold", false, true)
		}
	}
}
</script>
<style lang="less">
@import "editor";
</style>