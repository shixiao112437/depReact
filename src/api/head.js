import request from '../utils/request' 

export const  getHead = (data) => {
    return request({
        url:'/head/getData',
        method:'post',
        data
    })
}
export const  getUserInfo = () => {
    return request({
        url:'/test/userInfo',
        method:'post',
    })
}