import Vue from "vue"
import notify from "./notification.vue"

let notifyCtr = Vue.extend(notify)

let instance;
let ids = 0
var Notification = (options) => {
    let defaultInit = {
        "type":"success",
        "title": "",
        "content": "",
        "onClose": ()=>{},
        "icon": true,
        "time": 0,
    }

    options = options || {};

    if(typeof options === "string"){
        let title = options
        options = {}
        options.content = title
    }
    if(!instance || instance.$data.data.length === 0){
        instance = new notifyCtr();
        instance.vm = instance.$mount();
        document.body.appendChild(instance.vm.$el);
        instance.dom = instance.vm.$el;
        instance.ids = 0
        options.id = instance.ids
        instance.data.push(options)
    }else {
        instance.ids++
        options.id = instance.ids
        instance.data.push(options)
    }
}
export default Notification
