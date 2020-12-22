import React, { useState, useEffect } from 'react'
import api from '../../../api'
import { FullscreenExitOutlined, YuqueOutlined } from '@ant-design/icons'
import List1 from './index.module.scss';
export default function List() {
    const [list, setList] = useState([])

    let getDate = async () => {
        let params = {}
        let res = await api.artic.getArtic(params)
        console.log(res.data);
        setList(res.data)
    }

    useEffect(() => {
        getDate()
    },[])
    const edit = (id) => {

    }
    const del = (id) => {
        
    }
    const renderList = () => {
      return  list.map(item => {
            return (
                <div className={List1['article-item']} key={item._id}>
                    <div className={List1.left}>
                        <img src={item.file} alt="" />
                        <div className={List1.info}>
                            <span>{item.title}</span>
                            <span className={List1.date}>{item.time}</span>
                        </div>
                    </div>
                    <div className={List1.right}>
                        <span onClick={() => {
                            edit(item._id)
                        }}> <FullscreenExitOutlined /> 修改</span>
                        <span onClick={() => {
                            del(item._id)
                        }}> <YuqueOutlined /> 删除</span>
                    </div >
                    <div dangerouslySetInnerHTML={{__html:item.content}}></div>
                </div >
            )
        })
    }

    return (
        <div>
            1231232
            { renderList()}
        </div>
    )
}
