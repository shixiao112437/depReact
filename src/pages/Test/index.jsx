// import React, {  } from 'react'
import React, { Component } from 'react';
import { Form, Input, Button, Table, Tooltip, Modal } from 'antd';
import Api from '../../api/index'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import test from './index.module.scss'

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'id',
        width: 120
    },
    {
        title: '手机号',
        dataIndex: 'tel',
        key: 'tel',
        width: 120
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        width: 120
    },
    {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        width: 70,
        render: test => (<span>{test === 1 ? '男' : '女'}</span>)

    },
    {
        title: '出生日期',
        dataIndex: 'date',
        key: 'date',
        width: 120
    }, {
        title: '简介',
        dataIndex: 'dsc',
        key: 'dsc',
        width: 220,
        render: (dsc) =>
            (
                <Tooltip placement='top' title={dsc} trigger='click'>
                    <Button className={test.hidden}>{dsc}</Button>
                </Tooltip>
            )

    },
]
class TestI extends Component {
    form = React.createRef()
    form1 = React.createRef()

    state = {
        userInfo: {},
        data: [],
        page: {
            current: 1,
            total: 0,
            pageSize: 10,
        },
        visible: false
    }

    render() {
        return (
            <div>
                <h1>
                    <a href='http://localhost:8080/doc/React/intro.html'>ssdf </a>
                </h1>
                <Form ref={this.form} layout="inline">
                    <Form.Item label='姓名' name='name'>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="请输入姓名" />
                    </Form.Item>
                    <Form.Item label='手机号' name='tel'>
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="请输入ID"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={this.getData}
                            type="primary" htmlType="button">
                            查询
                         </Button>
                        <Button onClick={this.showModal}
                            type="primary" htmlType="button">
                            新增
                         </Button>
                    </Form.Item>
                </Form>

                <hr />

                <Table
                    size='small'
                    dataSource={this.state.data}
                    columns={columns}
                    pagination={{
                        pageSize: this.state.page.pageSize,
                        total: this.state.page.total,
                        onChange: this.pageChange,
                        onShowSizeChange:this.SizeChange
                    }}>
                    </Table>

                {/* <Pagination
                    pageSize={this.state.page.pageSize}
                    total={this.state.page.total}
                    onChange={this.pageChange}
                >
                </Pagination> */}

                <Modal
                    title="Title"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <Form ref={this.form1} layout="inline">
                        <Form.Item label='姓名' name='name'>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="请输入姓名" />
                        </Form.Item>
                        <Form.Item label='手机号' name='tel'>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="请输入手机号"
                            />
                        </Form.Item>
                        <Form.Item label='简介' name='dsc'>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="请输入简介"
                            />
                        </Form.Item>
                        <Form.Item label='出生日期' name='date'>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="请输入ID"
                                type='date'
                            />
                        </Form.Item>
                        <Form.Item label='性别' name='sex'>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="请选择性别"
                            />
                        </Form.Item>
                        <Form.Item label='年龄' name='age'>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="请输入年龄"
                            />
                        </Form.Item>
                     
                    </Form>
                </Modal>

            </div>
        )
    }
    // 获取表格数据
    getData = async () => {
        let res = await this.form.current.getFieldsValue()
        let resdata = await Api.test.getTable({ ...res, ...this.state.page })
        const page = Object.assign({}, this.state.page, { total: resdata.total })
        this.setState({
            data: resdata.data,
            page: page
        }, () => {

        })
    }
    // 获取表单数据
    async getFormData() {
        let res = await Api.head.getUserInfo()
        console.log(res.data.data, '1231231231');
        this.setState({
            userInfo: res.data.data.data
        }, () => {
            console.log(this.state.userInfo, '111111');
        })
    }
    //pageChange 分页
    pageChange = (page) => {
        console.log(this);
        const page1 = Object.assign({}, this.state.page, { current: page })
        this.setState({
            page: page1
        }, () => {

        })
        this.getData()
    }
    SizeChange = (current,size) => {
        console.log(current,size);
        this.setState({
            page:{
                page:1,
                pageSize:size
            }
        },()=>{

        })
        this.getData()
    }
    showModal = () => {
        this.setState({
            visible: true
        })
    }
    componentDidMount() {
        this.getData()
    }
    handleOk = async () => {
        let data = await this.form1.current.validateFields()
        // console.log(data);
        let res = await Api.test.addTable(data)
        console.log(res)
    }

}

export default TestI