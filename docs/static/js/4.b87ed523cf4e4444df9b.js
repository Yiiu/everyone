webpackJsonp([4,21],{101:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{tag:[{key:1,name:"test"},{key:2,name:"test"},{key:3,name:"test"}],key:3,data1:'<y-tag type="info">info</y-tag>\n<y-tag type="success">success</y-tag>\n<y-tag type="warning">warning</y-tag>\n<y-tag type="danger">danger</y-tag>\n<y-tag type="gray">gray</y-tag>',data2:'<y-tag type="info" closable>info</y-tag>\n<y-tag type="success" closable>success</y-tag>\n<y-tag type="warning" closable>warning</y-tag>\n<y-tag type="danger" closable>danger</y-tag>\n<y-tag type="gray" closable>gray</y-tag>',data3:'<transition-group name="y-tag">\n    <y-tag \n        type="gray" \n        closable \n        v-for="(tags, index) in tag" \n        :close="del.bind(this,index)"\n        :key="tags.key"\n    >{{tags.name}}</y-tag>\n</transition-group>'}},methods:{add:function(){this.key++,this.tag.push({key:this.key,name:"test"+this.key})},del:function(t){this.tag.splice(t,1)}}}},384:function(t,a,e){var n,s;n=e(101);var y=e(409);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=y.render,s.staticRenderFns=y.staticRenderFns,t.exports=n},409:function(t,a){t.exports={render:function(){var t=this;return t._h("section",[t._h("h1",["tag"])," ",[t._h("coding",{attrs:{title:"普通的",content:"有5种样式",code:t.data1}},[t._h("y-tag",{attrs:{type:"info"}},["info"])," ",t._h("y-tag",{attrs:{type:"success"}},["success"])," ",t._h("y-tag",{attrs:{type:"warning"}},["warning"])," ",t._h("y-tag",{attrs:{type:"danger"}},["danger"])," ",t._h("y-tag",{attrs:{type:"gray"}},["gray"])])," ",t._h("coding",{attrs:{title:"关闭按钮",content:"加上closable属性",code:t.data2}},[t._h("y-tag",{attrs:{type:"info",closable:""}},["info"])," ",t._h("y-tag",{attrs:{type:"success",closable:""}},["success"])," ",t._h("y-tag",{attrs:{type:"warning",closable:""}},["warning"])," ",t._h("y-tag",{attrs:{type:"danger",closable:""}},["danger"])," ",t._h("y-tag",{attrs:{type:"gray",closable:""}},["gray"])])," ",t._h("coding",{attrs:{title:"tag组",content:"多个tag",code:t.data3}},[t._h("transition-group",{attrs:{name:"y-tag"}},[t._l(t.tag,function(a,e){return t._h("y-tag",{key:a.key,attrs:{type:"gray",closable:"",close:t.del.bind(this,e)}},[t._s(a.name)])})])," ",t._h("y-button",{nativeOn:{click:function(a){t.add(a)}}},["添加"])])]," ",t._h("h2",["参数设置"])," ",t._m(0)])},staticRenderFns:[function(){var t=this;return t._h("table",[t._h("thead",[t._h("tr",[t._h("th",["属性"])," ",t._h("th",["说明"])," ",t._h("th",["类型"])," ",t._h("th",["默认值"])," ",t._h("th",["可选值"])])])," ",t._h("tbody",[t._h("tr",[t._h("td",["type"])," ",t._h("td",["样式"])," ",t._h("td",[t._h("code",["String"])])," ",t._h("td",["-"])," ",t._h("td",[t._h("code",["info"]),", ",t._h("code",["success"]),",",t._h("code",["warning"]),",",t._h("code",["danger"]),",",t._h("code",["gray"])])])," ",t._h("tr",[t._h("td",["closable"])," ",t._h("td",["删除按钮"])," ",t._h("td",[t._h("code",["Boolean"])])," ",t._h("td",[t._h("code",["false"])])," ",t._h("td",["-"])])," ",t._h("tr",[t._h("td",["close"])," ",t._h("td",["删除按钮回调"])," ",t._h("td",[t._h("code",["Function"])])," ",t._h("td",["-"])," ",t._h("td",["-"])])])])}]}},450:function(t,a,e){t.exports=e(384)}});
//# sourceMappingURL=4.b87ed523cf4e4444df9b.js.map