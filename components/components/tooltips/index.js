import tooltips from './tooltips'
import directive from './directive'

tooltips.install = (Vue) => {
    Vue.directive('pop', directive)
}
tooltips.directive = directive

export default tooltips
