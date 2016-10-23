import preview from "./preview"

const install = (Vue) => {
    Vue.directive('preview', {
        inserted: function(el, binding, vnode){
            vnode.size = function() {
                vnode.scale = vnode.elm.naturalWidth / vnode.elm.clientWidth
            }
            vnode.size()
        },
        bind:function(el, binding, vnode){
            el.className += "v-preview-img"
            vnode.styles = function(){
                // console.log(vnode.elm.x)
                let top = vnode.elm.y           // 图片距离顶部距离
                let Y = window.scrollY          // 滚动条位置

                console.log(top)
                console.log(Y)

                let dX = window.scrollY

                let left = vnode.elm.x           // 图片距离顶部距离
                el.style.transform = "scale(" +vnode.scale+") translate3d(0, "+ 0 +", 0)"


            }
            el.addEventListener("click", vnode.styles)
        },
        update:function(){
            vnode.size()
        }
    })
}

export default {install, preview}