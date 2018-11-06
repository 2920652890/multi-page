import $http from '@/axios'

const IsWx = () => {
    let u = navigator.userAgent.toLowerCase()
    let isWx = u.match(/MicroMessenger/i)=="micromessenger"
    return isWx
}

const wechatConfig = async () => {

    if(!IsWx()){
        return
    }

    //获取权限验证配置
    let app = null
    let url = location.href.split('#')[0]
    try {
        app = await $http.post({method:'Login.weixinJS',url})
    }catch (e){
        throw new Error('获取微信参数失败')
    }

    //加载微信接口
    try {
        let flag = await wechatReady(JSON.parse(app.data))
        return
    }catch (e){
        throw new Error(e)
    }
}

const wechatReady = data => {
    return new Promise((resolve,reject)=>{
        let jsApiList = ['showAllNonBaseMenuItem','onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone','chooseWXPay','hideMenuItems']
        window.wx.config({
            debug:data.debug,
            appId:data.appId,
            timestamp:data.timestamp,
            nonceStr:data.nonceStr,
            signature:data.signature,
            jsApiList

        })
        window.wx.ready( () => { resolve('ojbk') })
        window.wx.error( (e) => { reject(e.errMsg) })
    })
}



export default wechatConfig
