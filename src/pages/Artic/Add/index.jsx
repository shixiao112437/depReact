import React, { useState,useRef } from 'react'
import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
    Upload,
    message
} from 'antd';
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import Api from '../../../api/index'
import moment from 'moment'; // 日期格式化 
export default function Add() {
    const formRef = useRef()
    const [file, setFile] = useState('')
    const [time, setTime] = useState('')
    const [content, setContent] = useState('')
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const dateFormat = 'YYYY/MM/DD'
    function beforeUpload(file) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = res => {
            console.log(reader,'123123');
            setFile(reader.result)
        }
        return false
    }
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
        let res = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        setContent(res)        
    };
    async function  submit () {
      let res = await formRef.current.validateFields()
     let data= {
          ...res,
          file,
          content,
          time         
      }
      try {
        let {code} = await Api.artic.addArtic(data)
        alert(code)
        if(code===0){
            message.success({
                content:'发布成功'  ,
                duration:3,
            })
        }else{
            message.error({
                content:'发布失败'  ,
                duration:3,
            })
        }
      } catch (error) {
        message.error(error.toString())
          
      }
  
   
    }
    const  dateChange = (date,dateStr)=>{
        console.log(date);
        console.log(dateStr);
        setTime(dateStr)
    }
    return (
        <div>
            <Form
                ref={formRef}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 21 }}
                layout="horizontal">
                <Form.Item label="文章标题" name='title'>
                    <Input />
                </Form.Item>
                <Form.Item label="文章类型" name='type'>
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="发布时间" name='time'>
                    <DatePicker  format={dateFormat} onChange={dateChange}/>
                </Form.Item>
                <Form.Item label="文章封面">
                    <Upload
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="#"
                        beforeUpload={beforeUpload}
                    >
                        <Button>封面</Button>
                    </Upload>
                </Form.Item>
                <Form.Item label="文章简介">
                    <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        editorStyle={{
                            border: '1px solid #ccc',
                            minHeight: '200px',
                            marginTop: '-5px'
                        }}
                        onEditorStateChange={onEditorStateChange}
                    />
                </Form.Item>
                <Form.Item label="">
                    <Button onClick={submit} type='primary'>发布</Button>
                </Form.Item>
            </Form>

        </div>
    )
}
