import request from '../utils/request' 

export const login1 = (data) => {
    return request({
        url:'login',
        method:'post',
        data
    })
}
export const sign2 = (data) => {
    return request({
        url:'sign',
        method:'post',
        data
    })
}

export const upload = (data) => {
    return request({
        url:'/upload',
        method:'post',
        data,
        headers: {
            'Content-Type': 'multipart/form-data;charset=UTF-8'
          },
    })
}