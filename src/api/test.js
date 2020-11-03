import request from '../utils/request' 
export const  getTable = (data) => {
    return request({
        url:'/getTable',
        method:'post',
        data
    })
}
export const  addTable = (data) => {
    return request({
        url:'/addTable',
        method:'post',
        data
    })
}