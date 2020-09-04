import React, { PureComponent } from 'react'
import { Menu } from 'antd';
import './index.scss'
import { withRouter } from 'react-router-dom';
const navInfo = [{
    title:'fs模块',
    path:'/node/fs',
},{
    title:'http模块',
    path:'/node/http',
},{
    title:'koa',
    path:'/node/koa',
},{
    title:'egg',
    path:'/node/egg',
}]
class NodeNav extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='nodeWrap'>

           
            <Menu   theme='dark' onClick={this.toJump}>
                {this.renderMenu()}
            </Menu>
            </div>
        )
    }
    renderMenu(){
       return navInfo.map(item => {
           return (
           <Menu.Item 
           key={item.path}>
            {item.title}
            </Menu.Item>
           )
       })
    }
    toJump = (obj) => {
        console.log(obj,11111111111111);
        this.props.history.push({
            pathname:obj.key
        })
    }
}

export default withRouter(NodeNav) 