import request from '../utils/request' 
export const getArtic = (params) => {
    return request({
        url:'/getArtic',
        method:'get',
        params
    })
}
export const addArtic = (data) => {
    return request({
        url:'/addArtic',
        method:'post',
        data
    })
}