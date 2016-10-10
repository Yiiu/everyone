import tooltips from "./tooltips"
import Vue from "vue"

/*let tooltipsCtr = Vue.extend(tooltips)
let instance;
export default {

}
let tooltip = Vue.directive("tooltip", {
    bind:function(el, binding, vnode){
        instance = new tooltipsCtr({
            data:{
                title: binding.value
            }
        })
        instance.vm = instance.$mount()
        document.body.appendChild(instance.vm.$el);
    }
})
*/



export default tooltips