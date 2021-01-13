import Axios from 'axios'

let request = Axios.create({
    baseURL:'http://127.0.0.1:7001/api',
    
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
