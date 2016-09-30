import modal from "./modal"

(function (global, factory){
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.yyy = factory())
}(this, function(){
    'use strict'
    function install (Vue, options = {
        Modal:true
    }){
        let $root = null

        Vue.mixin({
            created (){
                if(!$root){
                    if(this === this.$root){
                        Init(this)
                    }
                }
            }
        })

        const Init = function(vm){
            $root = vm
            if(options.Modal){
                modal(Vue, vm)
            }
        }
    }
    return install
}))