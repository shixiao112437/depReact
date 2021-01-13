import React,{useState,useEffect} from 'react'
import api from '../../../api'

 function Detail(props) {
    const [content,setContent] = useState('')
    const [cover,setCover] = useState('')
    const [title,setTitle] = useState('')
    
    let  getDetail = async (props) => {
        console.log(props);
        let res = await api.artic.getDetail({
            '_id':props.match.params.id
        })
        setContent(res.data._doc.content)
        setCover(res.data._doc.file)
        setTitle(res.data._doc.title)
    }
    useEffect(() => {
        getDetail(props)
    },[props])

    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <img src={cover} alt="" style={{width:'500px'}}/>
            <hr/>
            <div dangerouslySetInnerHTML={{__html:content}}></div>
        </div>
    )
}

export default Detail