import React, { PureComponent } from 'react'
import { Menu } from 'antd';
import './index.scss'
const { SubMenu } = Menu;
const MenuInfo = [{ 
                    title: 'Vue',
                    path: '/vue',
                    key: 'vue',
                    children: [{ title: 'MVVM', path: '', key: 'vue1' }] 
                  },
                  { 
                    title: 'Webpack',
                    path: '/webpack',
                    key: 'webpack',
                    children: [{ title: 'MVVM', path: '', key: 'webpack1' }] 
                  },
                  { 
                    title: 'React',
                    path: '/react',
                    key: 'react',
                    children: [{ title: 'MVVM', path: '', key: 'react1' }] 
                  },
                ]
class Header extends PureComponent {


      state = {

        }
    

    render() {
        return (
            <Menu mode='horizontal'
                theme='dark'
                openKeys={[]}>
                <SubMenu title='菜单1' key='cb1'>
                    <Menu.Item>菜单一</Menu.Item>
                    <Menu.Item>菜单二</Menu.Item>
                    <Menu.Item>菜单一</Menu.Item>
                    <Menu.Item>菜单二</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}

export default Header