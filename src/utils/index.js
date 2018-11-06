import Basic from "./Basic"

class Utils extends Basic{

    constructor(){
        super()
    }

    IsWx = () => {
        let u = navigator.userAgent.toLowerCase()
        let isWx = u.match(/MicroMessenger/i)=="micromessenger"
        return isWx
    }

}
export default Utils
