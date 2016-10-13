import Vue from "vue"


export default {
    install(Vue){
        Vue.directive("clickdel", {
            bind:function(el, binding, vnode){
                document.addEventListener("click", clicks) // Boolean
                let fun = binding.expression
                function clicks(e){
                    let path = []
                    let parentNode = e.target
                    while (parentNode && parentNode !== document.body) {
                        path.push(parentNode)
                        parentNode = parentNode.parentNode
                    }
                    let boo = path.indexOf(el) !== -1 || path.indexOf(vnode.context.$el) !== -1
                    if(!boo){
                        vnode.context[fun]()
                    }
                }
                el.clickdel = {
                    "document":clicks
                }
            },
            unbind:function(el){
                document.removeEventListener("click", el.clickdel.documents)
            }
        })
    }
}
