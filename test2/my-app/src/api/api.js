import axios from 'axios'

//BASE_URL是默认的url地址(配置axios的默认URL)，如果你安装了webpack，可以在webpack配置全局变量
axios.defaults.baseURL = '';

//配置允许跨域携带cookie
axios.defaults.withCredentials = true

//配置超时时间
axios.defaults.timeout = 100000

//标识这是一个 ajax 请求
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'




export function get(url) {
    var isDebug = false;
    var preUrl = '';
    return axios.get(url)
        .then((res)=>{
            console.log('api-res', res)
        }).catch((err)=>{
            console.log('api-err', err)
    })
};

export function get2(url) {
    var isDebug = false;
    var preUrl = '';
    return axios.get(url)
        .then((res)=>{
            console.log('api-res', res)
        }).catch((err)=>{
        console.log('api-err', err)
    })
}

export function get3(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}


// export function post(url, data) {
//     return new Promise((resolve, reject) => {
//         axios.post(url, qs.stringify(data), {
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                 }
//             }
//         ).then(res => {
//             resolve(res.data)
//         }).catch(err => {
//             reject(err)
//         })
//     })
// }