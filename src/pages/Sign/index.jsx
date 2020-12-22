import React, { PureComponent } from 'react'
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Api from '../../api/index.js'
import sign from './index.module.scss'
const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 19,
    },
  };

class Sign extends PureComponent {
    form = React.createRef()

    constructor(props) {
        super(props)

        this.state = {
            formItem: {
                num: '',
                pwd: ''
            }
        }
    }
    componentDidMount() {
        console.log(Api, '222222222');
    }

    render() {
        return (
            <div className={sign.wrap}>
                <Card bordered className={sign.card}>
                    <Form {...layout} ref={this.form}>
                        <Form.Item label='用户名'>
                            <Input onChange={this.numChange} value={this.state.formItem.num} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入你的用户名" />
                        </Form.Item>
                        <Form.Item label='密码'>
                            <Input.Password type='password' onChange={this.pwdChange} value={this.state.formItem.pwd} prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入你的密码" />
                        </Form.Item>
                        <Form.Item label=''>
                            <Button onClick={this.sign} type="primary">
                                完成注册</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
    numChange = (e) => {
        this.setState({
            formItem: {
                ...this.state.formItem,
                num: e.target.value
            }
        })
    }
    pwdChange = (e) => {
        this.setState({
            formItem: {
                ...this.state.formItem,
                pwd: e.target.value
            }
        })
    }
    // 注册
    sign = async () => {
        //    console.log(this.form);
        let res1 = await this.form.current.validateFields()
        console.log(res1, '11111111111');
        if (res1) {
            let res = await Api.auth.sign2(this.state.formItem)
            console.log(res);
            this.props.history.push({
                pathname: '/home'
            })
        }

    }
}

export default Sign