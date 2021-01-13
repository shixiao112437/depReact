import React, { Component } from 'react'
import { Route,Redirect,withRouter } from 'react-router-dom'
import { Menu, Button } from 'antd';
import Add from './Add'
import List from './List'
import Detail from './Detail'
import artic from './index.module.scss'
const menuInfo = [{
    label:'发布文章',
    path:'/artic/add'
},{
    label:'文章列表',
    path:'/artic/list'
},{
    label:'文章详情',
    path:'/artic/detail'
},]
class Artic extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className={artic.wrap} style={{height:'100vh'}}>
                <div>
                <Menu defaultSelectedKeys={this.props.location.pathname} onSelect={this.routeJump.bind(this)}  style={{width:256,height:'100%'}} mode='vertical' theme='dark'>
                 {this.renderMenu()}
                 </Menu>
                </div>
                <div className={artic.route}>
                    <Route exact path='/' reder={(props) => {
                            return <Redirect to="/artic/add"></Redirect>
                    }}>
                    </Route>
                    <Route path='/artic/add' component={Add}></Route>
                    <Route path='/artic/list' component={List}></Route>
                    <Route path='/artic/detail/:id' component={Detail}></Route>
                </div>
            

        
            </div>
        )
    }
    // 菜单跳转
    routeJump({key}){
        this.props.history.push({
            pathname:key
        })
    }
    renderMenu(){
        return menuInfo.map(item => {
            return ( <Menu.Item key={item.path}>{item.label}</Menu.Item>)
        })
    }
}

export default Artic