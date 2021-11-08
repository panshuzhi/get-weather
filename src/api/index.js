/**
 * 业务请求方法管理
 */
import { httpGet } from './http'
import URL from './URL'

const api = {
    getCurrentWeather(id) {
        let url = URL.baseUrl
        let params = {
            id,
            lang: 'fr',
            appid: 'f2879ef2dfdd0d63c46073db5b02f528'
        }
        if (params) {
            let paramsArray = [];
            //拼接参数  
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        return httpGet(url)
    }
}

export default api
