import Axios from 'axios'

let request = Axios.create({
    baseURL:'http://localhost:9091/'
})


export default request 