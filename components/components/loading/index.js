import Vue from "vue"

import loading from "./loading"

let instance,instances;

let loadingCtr = Vue.extend(loading)

let Loading = function(){};

instance = new loadingCtr()

instance.vm = instance.$mount()

document.body.appendChild(instance.vm.$el)

Loading.open = () => {
    instance.test = "1"
}

Loading.success = () => {
    instance.success = true
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
