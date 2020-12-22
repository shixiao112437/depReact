import React, { PureComponent } from 'react'
import { Table ,Button} from 'antd'
import Footer from '../../components/Footer/index'
import Header from '../../components/Header/index'

// import SlideMenu from '../../components/SlideMenu/index'
// import ContentNav from '../../components/ContentNav/index'

import One from '../Num/1.jsx'
import Two from '../Num/2'
import Three from '../Num/3'
import Four from '../Num/4'
import Api from '../../api/index.js'

import './index.scss'
import { Route } from 'react-router-dom'

const {Column} =  Table

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            currentNav: '11111111111',
            data: []

        }
    }

    render() {
        return (
            <div>
                <Header></Header>
                    
                <Table dataSource={this.state.data}>
                <Column title="标题" dataIndex="title" key="title" />
                <Column title="内容" dataIndex="content" key="content" />
                <Column title="封面" dataIndex="cover" key="cover" render={
                    (cover) => {
                        return <img src={cover} alt="" width='50'/>
                    }
                } />
                <Column title="日期" dataIndex="date" key="date" />
                <Column title="状态" dataIndex="state" key="state" />
                <Column title="操作" dataIndex="isDelete" key="isDelete" render={
                    (isDelete) => {
                        return (
                            <Button type="link" disabled={isDelete}>编辑</Button>
                        )
                    }
                } />
                </Table>
                <Route path='/home/one' component={One}></Route>
                <Route path='/home/two' component={Two}></Route>
                <Route path='/home/three' component={Three}></Route>
                <Route path='/home/four' component={Four}></Route>
                <Footer></Footer>
            </div>
        )
    }
    changeNav = (value) => {
        this.setState({
            currentNav: value.title
        });
    }
    async getArtic() {
        let res = await Api.artic.getArtic()
        this.setState({
            data: res.data
        })
    }
    componentDidMount() {
        this.getArtic()
    }
}

export default Home