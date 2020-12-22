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
export const  upload = (data) => {
    return request({
        url:'/upload',
        method:'post',
        headers: {
            'Content-type': 'multipart/form-data'
        },
        data:data
    })
}
export const getMOvie = () => {
    return request({
        url:'/getmovie',
    })
}