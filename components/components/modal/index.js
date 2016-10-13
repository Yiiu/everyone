import modal from "./modal.vue"
import Vue from "vue"

let modalCtr = Vue.extend(modal)

let instance;

let next;

var Modal = (options) => {

    if(typeof options == "string"){
        let content = options
        options = {}

        options.content = content

        options.backBtn = {
            "show": false
        }
    }

    instance = new modalCtr({
        data: options
    })

    instance.vm = instance.$mount()

    document.body.appendChild(instance.vm.$el)

    instance.show = true

    return new Promise(function(resolve, reject){
        instance.callback = function(value, is){
            if(value == "resolve"){
                resolve(is)
            }else {
                reject(is)
            }
        }
    })
}
Modal.callback = (value)=>{
    if(value == "resolve"){
        next.resolve(1)
    }else {
        next.reject(2)
    }
}


export default Modal
