import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import api from '../../../api'
import {Button,Popconfirm,message} from 'antd'
import { FullscreenExitOutlined, YuqueOutlined,DeleteOutlined } from '@ant-design/icons'
import List1 from './index.module.scss';

const text = '你确认要删除这条数据吗'
export default function List(porps) {
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
    const del = async (id) => {
     try {
        let res = await api.artic.delArtic(id)
        console.log(res);
        if(res.code===0){
            message.success({
                content:'删除成功'  ,
                duration:3,
            })  
            getDate()
        }else{
            message.error({
                content:'删除失败'  ,
                duration:3,
            }) 
        }
     } catch (error) {
        message.error(error.toString())
     }

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
                        <Popconfirm placement="bottom" title={text} onConfirm={() => {
                            del(item._id)
                        }} okText="删除" cancelText="取消">
                         <Button type="link" danger > 
                         <DeleteOutlined />删除
                         </Button>
                         </Popconfirm>
                        <Link to={`/artic/detail/${item._id}`}>
                            查看
                        </Link>
                    </div >
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
