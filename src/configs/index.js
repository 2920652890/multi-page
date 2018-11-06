import $ from 'jquery'
import Reg from '@/utils/Reg'
import Utils from '@/utils'
import { msg,partialLoad,loading,confirm } from '@/hero'
import $http from '@/axios'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import '@/mixins'
import wechatConfig from './LoadWx'
import VueLazyLoad from 'vue-lazyload'
import prod from '@/configs/prod.js'
import Vconsole from 'vconsole'
let vconsole = new Vconsole()
require('swiper/dist/css/swiper.css')

function configWechat () {
    var script = document.createElement("script")
    script.type = "text/javascript"
    script.src = `http://res.wx.qq.com/open/js/jweixin-1.2.0.js`
    document.head.appendChild(script)
}
configWechat()

function configIcon(){
    var script = document.createElement("script")
    script.type = "text/javascript"
    script.src = `http://at.alicdn.com/t/font_796253_8n9cexcagxo.js`
    document.head.appendChild(script)
}
configIcon()

function setHtmlFontSize() {
    if($(window).width()<=640){
        $('html').css('fontSize', $(window).width() / 7.5 + 'px')
    } else {
        $('html').css('fontSize', 640 / 7.5 + 'px')
    }
}
setHtmlFontSize()
$(window).on('resize', setHtmlFontSize)

export default (Vue) => {
    Vue.use(msg)
    Vue.use(YDUI)
    Vue.use(confirm)
    Vue.use(loading)
    Vue.use(partialLoad)
    Vue.use(VueLazyLoad,{
        error:'./static/loadImg.jpg',
        loading:'./static/loadImg.jpg'
    })

    Vue.prototype.$http = $http
    Vue.prototype.prod = prod
    Vue.prototype.reg = new Reg()
    Vue.prototype.utils = new Utils()
    Vue.prototype.wechatConfig = wechatConfig
}

