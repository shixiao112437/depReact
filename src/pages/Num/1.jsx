import React, { PureComponent } from 'react'
import Banner from '../../components/Banner/index'

import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { upload } from '../../api/test'

class One extends PureComponent {

    state = {
        file: '',
        src:''
    }
    render() {
        return (
            <div>
                <Banner></Banner>
                <Upload beforeUpload={this.beforeUpload}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
                <button onClick={this.submit}>发送</button>
                <img src={this.state.src} alt=""/>
            </div>
        )
    }
    beforeUpload = (file) => {
        // console.log(file);
       let src =   window.URL.createObjectURL(file);
        this.setState({
            file,
            src
        })
        let reader = new FileReader()
        reader.onload = (res) => {
            console.log(res,'哈哈哈哈哈');
        }
        reader.readAsText(file)
        window.URL.createObjectURL(file);
        return false
    }
    submit = async () => {
        let params = new FormData()
        params.append('file', this.state.file)
        //   let res = params.get('file')
        console.log(params.get('file'));
        let res = await upload(params)
        console.log(res);
         
    }
}

export default One