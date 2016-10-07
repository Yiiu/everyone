import Vue from "Vue"
import message from "./message.vue"

let messageCtr = Vue.extend(message)

let instance;

var Message = (options) => {
    instance = new messageCtr({
        data:options
    })

    instance.vm = instance.$mount()

    instance.show = true
    
    document.body.appendChild(instance.vm.$el)


}

Message.success = (content, time) => {
    instance = new messageCtr({
        data:{
            content:content,
            time:time,
            type:"success"
        }
    })

    instance.vm = instance.$mount()

    document.body.appendChild(instance.vm.$el)
    
    instance.show = true
}
Message.info = (content, time) => {
    instance = new messageCtr({
        data:{
            content:content,
            time:time,
            type:"info"
        }
    })

    instance.vm = instance.$mount()

    document.body.appendChild(instance.vm.$el)
    
    instance.show = true
}
Message.warning = (content, time) => {
    instance = new messageCtr({
        data:{
            content:content,
            time:time,
            type:"warning"
        }
    })

    instance.vm = instance.$mount()

    document.body.appendChild(instance.vm.$el)
    
    instance.show = true
}
Message.danger = (content, time) => {
    instance = new messageCtr({
        data:{
            content:content,
            time:time,
            type:"danger"
        }
    })

    instance.vm = instance.$mount()

    document.body.appendChild(instance.vm.$el)
    
    instance.show = true
}
export default Message