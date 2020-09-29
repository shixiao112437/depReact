import React, { PureComponent } from 'react'
import login from './index.module.scss'
import './index.css'
import { Card } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
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
                                message: 'Please input your Username!',
                            },
                        ]} >
                        <Input value={this.state.formItem.num} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入你的账号" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
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
                    </Form.Item>
                </Form>
                </Card>
            </div>
        )
    }
    login = async () => {
    //    console.log(this.form);
      let res1 =await this.form.current.validateFields()
      console.log(res1,'11111111111');
        if(res1){
            let res = await login1(res1)
            console.log(res);
            this.props.history.push({
                pathname:'/home'
            })
        }
    
    }
}

export default Login