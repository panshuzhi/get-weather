/**
 * 封装请求
 */
import qs from 'querystring'

/**
 * get
 */
export function httpGet(url) {
    const result = fetch(url)
    return result
}
/**
 * post
 */
export function httpPost(url, params) {
    const result = fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'accept': 'application/json,text/plain,*/*'
        },
        body: qs.stringify(params)
    })
    return result
}
