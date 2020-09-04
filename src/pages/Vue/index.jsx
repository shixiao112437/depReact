import React, { PureComponent } from 'react'
import Footer from '../../components/Footer/index'
import Header from '../../components/Header/index'
import { List, Avatar } from 'antd';
const ListMenu = [{
    id: '1',
    content: '在导出子组件是 需要 引入withRouter from react-router-dom',
    title: '子组件通过js路由跳转 this.props.history 为underfind'
}, {
    id: '2', 
    content: 'a()',
    title: '路由传值之'
}, {
    id: '3', 
    content: '333333333333',
    title: '33'
}, {
    id: '4', 
    content: '4444444444444444',
    title: '44'
}]
class Index extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            a:'11111111',
            b:'222222222',
            c:'3333333333',
        }
    }

    render() {
        console.log(this.props, 'QQQQQQQQQQQQQQQQQQQQQQWWWWWWWWWWWWWW')

        return (
            <div>
                <Header></Header>
                <h1>React路由常见问题</h1>
                <List dataSource={ListMenu} renderItem={this.renderitem}>

                </List>
                <Footer>
                    {this.state}
                </Footer>
            </div>
        )
    }
    renderitem() {
        return ListMenu.map(item => {
            return (
                <List.Item key={item.id}>
                    <List.Item.Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={<div>{item.title}</div>}
                        description={item.content}
                    />
                </List.Item>
            )
        })
    }
}

export default Index