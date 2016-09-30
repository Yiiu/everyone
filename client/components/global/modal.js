import modal from "../modal"

export default (Vue, $root) => {
    Vue.set($root, "GLOBAL_MODAL", {
        isshow:false,
        title:"",
        content:"",
        ok: ()=>{},
        back: ()=>{},
        okBtn:{
            show: true,
            type:"primary",
            text:"确定",
        },
        backBtn:{
            show: true,
            type:"",
            text:"取消",
        }
    })

    Vue.component("modal", modal)

    Vue.prototype.$Modal = {
        init(obj){
            $root.GLOBAL_MODAL = {
                isshow:true,
                title:obj.title,
                content:obj.content,
                ok:obj.ok,
                back:obj.back,
                okBtn:obj.okBtn?obj.okBtn: {
                    show: true,
                    type:"primary",
                    text:"确定",
                },
                backBtn:obj.backBtn?obj.backBtn: {
                    show: true,
                    type:"",
                    text:"取消",
                },
            }
        },
        del(){
            $root.GLOBAL_MODAL = {
                isshow:false,
                title:"",
                content:"",
                ok: ()=>{},
                back: ()=>{},
                okBtn:{
                    show: true,
                    type:"primary",
                    text:"确定",
                },
                backBtn:{
                    show: true,
                    type:"",
                    text:"取消",
                }
            }
        }
    }
}