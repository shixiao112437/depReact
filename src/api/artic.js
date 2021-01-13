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

export const getDetail = (params) => {
    return request({
        url:'/articDetail',
        method:'get',
        params
    })
}
export const delArtic = (data) => {
    return request({
        url:'/delArtic',
        method:'post',
        data:{
            _id:data
        }
    })
}
