import notify from "./notification.vue"

const install = (Vue) => {

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


        if(!options.time){
            options.time = 1000
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
    Notification.success = (options)=>{
        if(typeof options === "string"){
            let title = options
            options = {}
            options.content = title
            options.type = "success"
        }else {
            options.type = "success"
        }

        if(!options.time){
            options.time = 1000
        }

        Notification(options)
    }
    Notification.info = (options)=>{
        if(typeof options === "string"){
            let title = options
            options = {}
            options.content = title
            options.type = "info"
        }else {
            options.type = "info"
        }

        if(!options.time){
            options.time = 1000
        }

        Notification(options)
    }
    Notification.warning = (options)=>{
        if(typeof options === "string"){
            let title = options
            options = {}
            options.content = title
            options.type = "warning"
        }else {
            options.type = "warning"
        }

        if(!options.time){
            options.time = 1000
        }

        Notification(options)
    }
    Notification.danger = (options)=>{
        if(typeof options === "string"){
            let title = options
            options = {}
            options.content = title
            options.type = "danger"
        }else {
            options.type = "danger"
        }

        if(!options.time){
            options.time = 1000
        }

        Notification(options)
    }

    Vue.prototype.$notify = Notification
}
export default {
    install,
    notify
}
