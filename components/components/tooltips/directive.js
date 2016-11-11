export default {
    bind(el, binding, vnode) {
        vnode.context.$refs[binding.arg].$refs.html = el
    }
}