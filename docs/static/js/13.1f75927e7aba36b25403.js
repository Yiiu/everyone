webpackJsonp([13,25],{51:function(t,n,e){t.exports=e(401)},208:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{test1Code:'this.$notify("成功！")\nthis.$notify.danger("危险！")\nthis.$notify.info("信息！")\nthis.$notify.warning("禁止！")\n',test2Code:'this.$notify({\n    "title":"test",\n    "content":"sfafasdf",\n    "icon":true\n})\nthis.$notify.success({\n    "title":"test",\n    "content":"sfafasdf",\n    "icon":true\n})\nthis.$notify.info({\n    "title":"test",\n    "content":"sfafasdf",\n    "icon":true\n})\nthis.$notify.warning({\n    "title":"test",\n    "content":"sfafasdf",\n    "icon":true\n})\n',test3Code:'this.$notify({\n    "title":"我会自动关闭",\n    "content":"嘿嘿嘿哈哈哈",\n    "icon":true,\n    "time": 1000\n})\n'}},methods:{test1:function(){this.$notify("成功！")},test2:function(){this.$notify.danger("危险！")},test3:function(){this.$notify.info("信息！")},test4:function(){this.$notify.warning("禁止！")},test5:function(){this.$notify({title:"成功！",content:"嘿嘿嘿哈哈哈",icon:!0})},test6:function(){this.$notify.danger({title:"危险！",content:"嘿嘿嘿哈哈哈",icon:!0})},test7:function(){this.$notify.info({title:"信息！",content:"嘿嘿嘿哈哈哈",icon:!0})},test8:function(){this.$notify.warning({title:"禁止！",content:"嘿嘿嘿哈哈哈",icon:!0})},test9:function(){this.$notify({title:"我会自动关闭",content:"嘿嘿嘿哈哈哈",icon:!0,time:1e3})}}}},401:function(t,n,e){var i,o;i=e(208);var v=e(468);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=v.render,o.staticRenderFns=v.staticRenderFns,t.exports=i},468:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("h1",[t._v("Notification")]),t._v(" "),e("h4",[t._v("提示栏组件")]),t._v(" "),[e("coding",{attrs:{code:t.test1Code,title:"notification",content:"简单的notify，不带内容，只有标题"}},[e("y-button",{attrs:{type:"ghost"},nativeOn:{click:function(n){t.test1(n)}}},[t._v("成功！")]),t._v(" "),e("y-button",{attrs:{type:"ghost"},nativeOn:{click:function(n){t.test2(n)}}},[t._v("危险！")]),t._v(" "),e("y-button",{attrs:{type:"ghost"},nativeOn:{click:function(n){t.test3(n)}}},[t._v("失败！")]),t._v(" "),e("y-button",{attrs:{type:"ghost"},nativeOn:{click:function(n){t.test4(n)}}},[t._v("禁止！")])],1),t._v(" "),e("coding",{attrs:{code:t.test2Code,title:"带icon大notify",content:"带有icon和内容"}},[e("y-button",{attrs:{type:"ghost"},nativeOn:{click:function(n){t.test5(n)}}},[t._v("成功！")]),t._v(" "),e("y-button",{attrs:{type:"ghost"},nativeOn:{click:function(n){t.test6(n)}}},[t._v("危险！")]),t._v(" "),e("y-button",{attrs:{type:"ghost"},nativeOn:{click:function(n){t.test7(n)}}},[t._v("失败！")]),t._v(" "),e("y-button",{attrs:{type:"ghost"},nativeOn:{click:function(n){t.test8(n)}}},[t._v("禁止！")])],1),t._v(" "),e("coding",{attrs:{code:t.test3Code,title:"自动关闭",content:"1秒后自动关闭"}},[e("y-button",{attrs:{type:"ghost"},nativeOn:{click:function(n){t.test9(n)}}},[t._v("自动关闭")])],1)],t._v(" "),e("h2",[t._v("参数设置")]),t._v(" "),t._m(0)],2)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("可选值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("类型")]),t._v(" "),e("td",[e("code",[t._v("String")])]),t._v(" "),e("td",[e("code",[t._v("success")])]),t._v(" "),e("td",[e("code",[t._v("info")]),t._v(","),e("code",[t._v("warning")]),t._v(","),e("code",[t._v("danger")])])]),t._v(" "),e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("标题")]),t._v(" "),e("td",[e("code",[t._v("String")])]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("content")]),t._v(" "),e("td",[t._v("内容")]),t._v(" "),e("td",[e("code",[t._v("String")])]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("onClose")]),t._v(" "),e("td",[t._v("关闭时的回调")]),t._v(" "),e("td",[e("code",[t._v("Function")])]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("icon")]),t._v(" "),e("td",[t._v("icon")]),t._v(" "),e("td",[e("code",[t._v("Boolean")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("time")]),t._v(" "),e("td",[t._v("延迟关闭时间")]),t._v(" "),e("td",[e("code",[t._v("Number")])]),t._v(" "),e("td",[e("code",[t._v("0(默认不关闭,毫秒)")])]),t._v(" "),e("td",[t._v("-")])])])])}]}}});
//# sourceMappingURL=13.1f75927e7aba36b25403.js.map