import Notification from './components/notification'
import Message from './components/message'
import Loading from './components/loading'

import Alert from './components/alert'
import Button from './components/button'
import Radio from './components/radio'
import RadioGroup from './components/radio-group'
import RadioButton from './components/radio-button'
import Checkbox from './components/checkbox'
import CheckboxGroup from './components/checkbox-group'

import Modal from './components/modal'
import Tooltips from './components/tooltips'
import Popover from './components/popover'
import Popconfirm from './components/popconfirm'
import Preview from './components/preview'
import Select from './components/select'
import Option from './components/option'
import Pagination from './components/pagination'
import Input from './components/input'
import Collapse from './components/collapse'
import Panel from './components/panel'

import Tag from './components/tag'

import Svg from './components/svg'

const install = (Vue) => {
    // Vue.use(click)
    Vue.use(Modal)
    Vue.use(Notification)
    Vue.use(Message)
    Vue.use(Loading)
    Vue.use(Tooltips)

    Vue.use(Preview)

    Vue.component(Alert.name, Alert)
    Vue.component(Button.name, Button)
    Vue.component(Radio.name, Radio)
    Vue.component(RadioGroup.name, RadioGroup)
    Vue.component(RadioButton.name, RadioButton)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(CheckboxGroup.name, CheckboxGroup)
    Vue.component(Tooltips.name, Tooltips)
    Vue.component(Popover.name, Popover)
    Vue.component(Popconfirm.name, Popconfirm)
    Vue.component(Select.name, Select)
    Vue.component(Option.name, Option)
    Vue.component(Tag.name, Tag)
    Vue.component(Svg.name, Svg)
    Vue.component(Pagination.name, Pagination)
    Vue.component(Input.name, Input)
    Vue.component(Collapse.name, Collapse)
    Vue.component(Panel.name, Panel)
    Vue.component(Modal.modal.name, Modal.modal)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

module.exports = {
    install,
    Alert,
    Modal,
    Button,
    Message,
    Notification,
    Loading,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxGroup,
    Tooltips,
    Popover,
    Popconfirm,
    Select,
    Option,
    Tag,
    Pagination,
    Input,
    Svg
}
