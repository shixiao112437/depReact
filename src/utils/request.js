import Axios from 'axios'

let request = Axios.create({
    baseURL:'http://localhost:9091/'
})
request.interceptors.response.use(function(response){
    try {
       return response.data
    } catch (error) {
       return response
        
    }
},function(error){
    return Promise.reject(error)
})

export default request 