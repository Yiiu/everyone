webpackJsonp([14,20],{90:function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e='<template>\n    <y-button type="primary">一个按钮</y-button>\n    <y-button type="ghost">一个按钮</y-button>\n    <y-button type="dashed">一个按钮</y-button>\n</template>\n',n='<template>\n    <y-button type="primary" disabled>一个按钮</y-button>\n    <y-button type="primary" loading>一个按钮</y-button>\n</template>\n',r='<template>\n    <y-button type="ghost" @click.native="test">一个按钮</y-button>\n</template>\n',h='<template>\n    <y-button type="primary">一个按钮</y-button>\n    <y-button type="ghost">一个按钮</y-button>\n    <y-button type="dashed">一个按钮</y-button>\n    <y-button type="primary" color="green">一个按钮</y-button>\n    <y-button type="ghost" color="green">一个按钮</y-button>\n    <y-button type="dashed" color="green">一个按钮</y-button>\n    <y-button type="primary" color="red">一个按钮</y-button>\n    <y-button type="ghost" color="red">一个按钮</y-button>\n    <y-button type="dashed" color="red">一个按钮</y-button>\n    <y-button type="primary" color="yellow">一个按钮</y-button>\n    <y-button type="ghost" color="yellow">一个按钮</y-button>\n    <y-button type="dashed" color="yellow">一个按钮</y-button>\n</template>\n';o.default={data:function(){return{type:e,state:n,on:r,color:h}},methods:{test:function(){this.$notify({title:"test",content:"sfafasdf",time:1e3,icon:!0})}}}},367:function(t,o,e){var n,r;n=e(90);var h=e(422);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=h.render,r.staticRenderFns=h.staticRenderFns,t.exports=n},422:function(t,o){t.exports={render:function(){var t=this;return t._h("section",[t._m(0)," ",[t._h("coding",{attrs:{code:t.type,title:"三种样式",content:"button有三种样式:primary,ghost,dashed"}},[t._h("y-button",{attrs:{type:"primary"}},["一个按钮"])," ",t._h("y-button",{attrs:{type:"ghost"}},["一个按钮"])," ",t._h("y-button",{attrs:{type:"dashed"}},["一个按钮"])])," ",t._h("coding",{attrs:{code:t.state,title:"两种状态",content:"可以添加disabled和loading选择按钮状态"}},[t._h("y-button",{attrs:{type:"primary",disabled:""}},["一个按钮"])," ",t._h("y-button",{attrs:{type:"primary",loading:""}},["一个按钮"])])," ",t._h("coding",{attrs:{code:t.on,title:"原生事件",content:"可以给按钮添加原生事件。"}},[t._h("y-button",{attrs:{type:"ghost"},nativeOn:{click:function(o){t.test(o)}}},["一个按钮"])])," ",t._h("coding",{attrs:{code:t.color,title:"颜色",content:"有四种颜色可选，默认蓝色。"}},[t._h("y-button",{attrs:{type:"primary"}},["一个按钮"])," ",t._h("y-button",{attrs:{type:"ghost"}},["一个按钮"])," ",t._h("y-button",{attrs:{type:"dashed"}},["一个按钮"])," ",t._m(1)," ",t._m(2)," ",t._h("y-button",{attrs:{type:"primary",color:"green"}},["一个按钮"])," ",t._h("y-button",{attrs:{type:"ghost",color:"green"}},["一个按钮"])," ",t._h("y-button",{attrs:{type:"dashed",color:"green"}},["一个按钮"])," ",t._m(3)," ",t._m(4)," ",t._h("y-button",{attrs:{type:"primary",color:"red"}},["一个按钮"])," ",t._h("y-button",{attrs:{type:"ghost",color:"red"}},["一个按钮"])," ",t._h("y-button",{attrs:{type:"dashed",color:"red"}},["一个按钮"])," ",t._m(5)," ",t._m(6)," ",t._h("y-button",{attrs:{type:"primary",color:"yellow"}},["一个按钮"])," ",t._h("y-button",{attrs:{type:"ghost",color:"yellow"}},["一个按钮"])," ",t._h("y-button",{attrs:{type:"dashed",color:"yellow"}},["一个按钮"])])]," ",t._m(7)," ",t._m(8)])},staticRenderFns:[function(){var t=this;return t._h("h1",["Button"])},function(){var t=this;return t._h("br")},function(){var t=this;return t._h("br")},function(){var t=this;return t._h("br")},function(){var t=this;return t._h("br")},function(){var t=this;return t._h("br")},function(){var t=this;return t._h("br")},function(){var t=this;return t._h("h2",["参数设置"])},function(){var t=this;return t._h("table",[t._h("thead",[t._h("tr",[t._h("th",["属性"])," ",t._h("th",["说明"])," ",t._h("th",["类型"])," ",t._h("th",["默认值"])," ",t._h("th",["可选值"])])])," ",t._h("tbody",[t._h("tr",[t._h("td",["type"])," ",t._h("td",["按钮的类型"])," ",t._h("td",[t._h("code",["String"])])," ",t._h("td",[t._h("code",["primary"])])," ",t._h("td",[t._h("code",["ghosts"]),",",t._h("code",["dashed"])])])," ",t._h("tr",[t._h("td",["size"])," ",t._h("td",["按钮的大小"])," ",t._h("td",[t._h("code",["String"])])," ",t._h("td",["-"])," ",t._h("td",[t._h("code",["lg"]),",",t._h("code",["sm"])])])," ",t._h("tr",[t._h("td",["disabled"])," ",t._h("td",["可选状态"])," ",t._h("td",[t._h("code",["Boolean"])])," ",t._h("td",[t._h("code",["false"])])," ",t._h("td",["-"])])," ",t._h("tr",[t._h("td",["loading"])," ",t._h("td",["加载"])," ",t._h("td",[t._h("code",["Boolean"])])," ",t._h("td",[t._h("code",["false"])])," ",t._h("td",["-"])])," ",t._h("tr",[t._h("td",["color"])," ",t._h("td",["按钮的颜色"])," ",t._h("td",[t._h("code",["String"])])," ",t._h("td",[t._h("code",["blue"])])," ",t._h("td",[t._h("code",["green"]),",",t._h("code",["yellow"]),",",t._h("code",["red"]),",",t._h("code",["gray"])])])])])}]}},433:function(t,o,e){t.exports=e(367)}});
//# sourceMappingURL=14.bdeb1a85f8cee06adab9.js.map