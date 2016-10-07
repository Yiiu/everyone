import Vue from "vue"

import loading from "./loading"

let instance;

let loadingCtr = Vue.extend(loading)

let Loading = function(){};

Loading.open = () => {
    if(instance){
        return
    }
    instance = new loadingCtr()

    instance.vm = instance.$mount()

    instance.show = true

    document.body.appendChild(instance.vm.$el)
}
Loading.success = () => {
    if(instance){

        instance.success = true

        instance = undefined
        
    }else {
        console.warn("请先open")
    }

}
Loading.err = () => {
    if(instance){

        instance.err = true

        instance = undefined
        
    }else {
        console.warn("请先open")
    }

}

export default Loading
