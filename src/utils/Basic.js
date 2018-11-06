class Basic {


    // 输入带两位小数的金额
    formatNumber(value,max){
        max = max*1
        value = value.replace(/[^\d\.]/g, '').replace(/^\./g,'').replace(/\.{2,}/g,'.').replace('.','$#$').replace(/\./g,'').replace('$#$','.').replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3')

        return value > max ? max.toFixed(2) : value
    }

    // 银行卡
    formatBankNumber (bankNumber) {
        return bankNumber.substr(0,4)+" **** **** "+bankNumber.substr(-4)
    }

    // 手机号码中间部分替换成星号
    formatPhone (phone) {
        if(phone){
            return phone.substr(0, 3) + '****' + phone.substr(7, 11)
        }else {
            return ''
        }

    }

    // 是否空对象
    isEmptyObject (obj) {
        for (var name in obj){
            return false // 返回false，不为空对象
        }
        return true // 返回true，为空对象
    }

    // 获取url参数
    getQueryString (name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
        let r = window.location.search.substr(1).match(reg)
        if ( r != null ){
            return decodeURI(r[2])
        }else{
            return null
        }
    }

    // 合并参数
    buildParam (_init,options) {
        let param = options && !this.isEmptyObject(options) ? Object.assign(_init,options) : _init
        return param
    }

    //,分割数组
    cutArray (str,flag = ',') {
        let result = []
        if(str.indexOf(flag)>-1){
            result = str.split(flag)
        }else {
            result.push(str)
        }
        return result
    }

    // 格式化日期,返回 年 月 日 星期
    formatDate (str) {
        str = str ? new Date() : new Date(str.replace(/(-)/g, '/'))
        let week = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"]
        let year = str.getFullYear()
        let month = str.getMonth()+1 < 10 ? "0" + (str.getMonth()+1) : str.getMonth()+1
        let day = str.getDate() < 10 ? "0" + str.getDate() : str.getDate()
        week = week[str.getDay()]
        return {year,month,day,week}
    }

    // fmt 'yyyy-MM-dd hh:mm:ss' 转换格式
    formatDay (fmt,tm) {
        let times = tm ? new Date(tm.replace(/(-)/g, '/')) : new Date()
        let o = {
            "M+" : times.getMonth()+1,                 //月份
            "d+" : times.getDate(),                    //日
            "h+" : times.getHours(),                   //小时
            "m+" : times.getMinutes(),                 //分
            "s+" : times.getSeconds(),                 //秒
            "q+" : Math.floor((times.getMonth()+3)/3), //季度
            "S"  : times.getMilliseconds()             //毫秒
        }
        if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (times.getFullYear()+"").substr(4 - RegExp.$1.length))
        }
        for(var k in o) {
            if(new RegExp("("+ k +")").test(fmt)){
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)))
            }
        }
        return fmt
    }

    //数字转成中文
    SectionToChinese (section) {
        var chnNumChar = ["零","一","二","三","四","五","六","七","八","九"]
        var chnUnitSection = ["","万","亿","万亿","亿亿"]
        var chnUnitChar = ["","十","百","千"]

        let strIns = '', chnStr = ''
        let unitPos = 0
        let zero = true
        while(section > 0){
            var v = section % 10
            if(v === 0){
                if(!zero){
                    zero = true
                    chnStr = chnNumChar[v] + chnStr
                }
            }else{
                zero = false
                strIns = chnNumChar[v]
                strIns += chnUnitChar[unitPos]
                chnStr = strIns + chnStr
            }
            unitPos++
            section = Math.floor(section / 10)
        }
        if(chnStr == '一十') return '十'
        return chnStr
    }


}
export default Basic
