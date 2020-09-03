import React, { PureComponent } from 'react'
import { Menu } from 'antd';
import './index.scss'
const { SubMenu } = Menu;
// 菜单信息
const MenuInfo = [{ 
                    title: 'node',
                    path: '/node',
                    key: 'node',
                    children: [{ title: 'node', path: '/node/list', key: 'node1' }] 
                  },
                  { 
                    title: 'Webpack',
                    path: '/webpack',
                    key: 'webpack',
                    children: [{ title: 'loader', path: '/webpack/list', key: 'webpack1' }] 
                  },
                  { 
                    title: 'React',
                    path: '/react',
                    key: 'react',
                    children: [{ title: 'redux', path: '/react/list', key: 'react1' }] 
                  },
                ]

class Header extends PureComponent {


      state = {

      }
    

    render() {
        return (
          // 导航菜单
          <div>
            <Menu mode='horizontal' theme='dark'>
                  { this.renderMenu() }
            </Menu>
           {/*  banner  */}

          </div>
        )
    }
    renderMenu(){
      return MenuInfo.map(item =>{
        return (
          <SubMenu title={item.title}
          key={item.path}>
              {item.children.map(child=>{
                return (
                <Menu.Item onClick={()=>{this.toJump(child)}} key={child.key}>{child.title}</Menu.Item>
                )
              })}
          </SubMenu>
        )
      })
    }
    toJump(child){
        console.log(child,'QQQQQQQQQQQQQQQQQQQQQQ');
    }
}

export default Header