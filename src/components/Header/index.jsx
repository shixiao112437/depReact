import React, { Component } from 'react'
import { Menu } from 'antd';
import './index.scss'
import { withRouter } from 'react-router-dom';
// import Api from '../../api/index'
const { SubMenu } = Menu;
// 菜单信息
const MenuInfo = [{
  title: 'node',
  key: 'node',
  children: [{ title: 'node', path: '/node', key: 'node1' }]
},
{
  title: '文章模块',
  path: '/artic',
  key: '/artic'
},
{
  title: 'React',
  path: '/react',
  key: 'react',
  children: [{ title: 'redux', path: '/react', key: 'react1' }]
},
]

class Header extends Component {


  state = {
    MenuInfo
  }


  render() {

    return (
      // 导航菜单
      <div className='header'>
        <Menu mode='horizontal' theme='dark' onSelect={this.MenuJump}>
          {this.renderMenu()}
        </Menu>
        {/*  banner  */}
        <span className='logout'> 退出登录</span>
      </div>
    )
  }
  renderMenu() {
    return MenuInfo.map(item => {
      if(item.children){
        return (
          <SubMenu title={item.title}
            key={item.key}>
            {item.children.map(child => {
              return (<Menu.Item  key={child.path}>{child.title}</Menu.Item>)
            })}
          </SubMenu>
        )
      }else{
        return (<Menu.Item  key={item.path}>{item.title}</Menu.Item>)
      }
 
    })
  }
  MenuJump = ({ item, key, keyPath, domEvent }) => {
    console.log('好哈111111111111', this);
    console.log(item);
    console.log(key);
    console.log(keyPath);
    console.log(domEvent);
    this.props.history.push({
      pathname: key
    })
  }
  componentDidMount() {
 
  }
}

export default withRouter(Header) 