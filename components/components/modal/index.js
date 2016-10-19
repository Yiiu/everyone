import modal from "./modal.vue"



const install = (Vue) => {
    let instance;

    let next;

    let modalCtr = Vue.extend(modal)

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

    Vue.prototype.$modal = Modal

}

export default {
    install,
    modal
}
