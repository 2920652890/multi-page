class Reg{

    //验证中文
    checkChn(str){
        if(!str){
            return "请输入您的真实姓名"
        }
        let re=/[^\u4e00-\u9fa5]/

        if(re.test(str)){
            return "请输入您的真实姓名"
        }
        return 'ok'
    }

    //验证身份证号码
    checkCard(str){
        if(!str){
            return "请输入身份证号码"
        }
        //15位数身份证正则表达式
        let arg1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/
        //18位数身份证正则表达式
        let arg2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/
        if (str.match(arg1) == null && str.match(arg2) == null) {
            return "请正确的身份证号码"
        }
        return 'ok'
    }

    //验证手机号
    checkPhone(str){
        let regPhone = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|17[0-9]{1}|(18[0-9]{1})|(19[0-9]{1}))+\d{8})$/
        if(!str){
            return "请输入手机号"
        }
        if(!regPhone.test(str)){
            return "请填写正确的手机号"
        }
        return 'ok'
    }

    //验证密码
    checkPsd(str){
        if(!str){
            return "请输入密码"
        }
        if(str.length<6){
          return "密码必须大于6位，区分大小写"
        }
        return 'ok'
    }

    //验证邮箱
    checkMail(str){
        let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$")
        if(!str){
            return "请输入邮箱"
        }
        if(!reg.test(str)){
            return "请输入正确的邮箱"
        }
        return 'ok'
    }

    //Luhm算法银行卡
    luhmCheck(bankno){
        if(!bankno){
            return '请输入银行卡号'
        }

        if (bankno.length < 16 || bankno.length > 19){
            return '银行卡号长度必须在16到19之间'
        }
        let num = /^\d*$/
        if (!num.exec(bankno)) {
            return '银行卡号必须全为数字'
        }
        let strBin="10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99"
        if (strBin.indexOf(bankno.substring(0, 2))== -1) {
            return '银行卡号开头6位不符合规范'
        }
        let lastNum=bankno.substr(bankno.length-1,1)
        let first15Num=bankno.substr(0,bankno.length-1)
        let newArr=new Array()
        for(let i=first15Num.length-1;i>-1;i--){
            newArr.push(first15Num.substr(i,1))
        }
        let arrJiShu=new Array()
        let arrJiShu2=new Array()
        let arrOuShu=new Array()
        for(let j=0;j<newArr.length;j++){
            if((j+1)%2==1){//奇数位
                if(parseInt(newArr[j])*2<9)
                    arrJiShu.push(parseInt(newArr[j])*2)
                else
                    arrJiShu2.push(parseInt(newArr[j])*2)
            }
            else
                arrOuShu.push(newArr[j])
        }
        let jishu_child1=new Array()
        let jishu_child2=new Array()
        for(let h=0;h<arrJiShu2.length;h++){
            jishu_child1.push(parseInt(arrJiShu2[h])%10)
            jishu_child2.push(parseInt(arrJiShu2[h])/10)
        }
        let sumJiShu=0
        let sumOuShu=0
        let sumJiShuChild1=0
        let sumJiShuChild2=0
        let sumTotal=0
        for(let m=0;m<arrJiShu.length;m++){
            sumJiShu=sumJiShu+parseInt(arrJiShu[m])
        }
        for(let n=0;n<arrOuShu.length;n++){
            sumOuShu=sumOuShu+parseInt(arrOuShu[n])
        }
        for(let p=0;p<jishu_child1.length;p++){
            sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p])
            sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p])
        }
        sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2)
        let k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10
        let luhm= 10-k
        if(lastNum==luhm){
            return 'ok'
        }else {
            return '请输入正确的银行卡号'
        }
    }
}
export default Reg
