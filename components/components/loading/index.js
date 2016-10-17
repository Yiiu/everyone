import Vue from "vue"

import loading from "./loading"

let instance,instances;

let loadingCtr = Vue.extend(loading)

let Loading = function(){};

instance = new loadingCtr()

instance.vm = instance.$mount()

document.body.appendChild(instance.vm.$el)

Loading.open = () => {
    instance.open()
}

Loading.success = () => {
    instance.success()
}
Loading.err = () => {
    instance.err()
}

export default Loading
