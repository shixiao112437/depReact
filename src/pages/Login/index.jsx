import React, { PureComponent } from 'react'
import login from './index.module.scss'
import './index.css'
import { Card } from 'antd';
import { Form, Input, Button, Checkbox ,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login1 } from '../../api/auth'
import Api from '../../api/index.js'
class Login extends PureComponent {
    form =  React.createRef()
    constructor(props) {
        super(props)
        this.state = {
            formItem:{
                num:'',
                pwd:''
            }
        }
    }
    componentDidMount(){
        console.log(Api,'1111111111111');
    }
    render() {
        return (
            <div className={login.wrap}>
                <Card bordered className={login.card}>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    ref={this.form}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '用户名不能为空',
                            },
                        ]} >
                        <Input onChange={this.numChange} value={this.state.formItem.num} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入你的账号" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '密码不能为空!',
                            },
                        ]}
                    >
                        <Input
                            onChange={this.pwdChange}
                            value={this.state.formItem.pwd}
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="请输入你的密码"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>

                    </Form.Item>

                    <Form.Item>
                        <Button onClick={this.login} type="primary" htmlType="button" className="login-form-button">
                            登录
                        </Button>
                        <Button onClick={this.sign} type="primary" htmlType="button" className="login-form-button">
                            注册
                        </Button>
                    </Form.Item>
                </Form>
                </Card>
            </div>
        )
    }
    login = async () => {
    //    console.log(this.form);
      let status =await this.form.current.validateFields()
      console.log(status,'11111111111');
      if(!status) return 
     try {
       let res = await login1(this.state.formItem)
        
       if(res.code === 0){
        this.props.history.push({
            pathname:'/home/one'
        })
       }else{
        this.form.current.resetFields()
        message.error({
          content:'密码错误! 请重新输入'  ,
          duration:3,
          onClose: () => {
           
          }
        })
       }
     } catch (error) {
         console.log(error.toString());
     }
        
    
    }
    sign = async () => {
        this.props.history.push({
            pathname:"/sign"
        })
        
    }
    numChange = (e)=>{
        this.setState({
            formItem:{
                ...this.state.formItem,
                num:e.target.value
            }
        })
    }
    pwdChange = (e)=>{
        this.setState({
            formItem:{
                ...this.state.formItem,
                pwd:e.target.value
            }
        })
    }
}

export default Login