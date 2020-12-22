import React, { useState,useEffect } from 'react'

import { getMOvie } from '../../../api/test.js'

function Http(){
    const [data,setData] = useState({})
    const [modal,setModal] = useState(false)
    
    let getData = async() =>{
       try {
        let res = await getMOvie()
        setData(res.data)
        setModal(false)
       } catch (error) {
           console.log(error);
       }
    }
    useEffect( () => {
        setModal(true) 
        getData()
    }, [])
    if(modal===true){
        return <p>
            loading...
        </p>
    }

    return(
     <div>
       
            <p>
                电影名称:{data.name}
            </p>
            <p>
                电影名称:{data.people}
            </p>
   
     </div>
    )
}



export default Http