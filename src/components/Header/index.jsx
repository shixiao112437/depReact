import React, { PureComponent } from 'react'
import { Menu } from 'antd';
import './index.scss'
import { withRouter } from 'react-router-dom';
import Api from '../../api/index'
const { SubMenu } = Menu;
// 菜单信息
const MenuInfo = [{ 
                    title: 'node',
                    key: 'node',
                    children: [{ title: 'node', path: '/node', key: 'node1' }] 
                  },
                  { 
                    title: 'Webpack',
                    path: '/webpack',
                    key: 'webpack',
                    children: [{ title: 'loader', path: '/webpack', key: 'webpack1' }] 
                  },
                  { 
                    title: 'React',
                    path: '/react',
                    key: 'react',
                    children: [{ title: 'redux', path: '/react', key: 'react1' }] 
                  },
                ]

class Header extends PureComponent {


      state = {
        MenuInfo:[]
      }
    

    render() {
      console.log(this.props,'QQQQQQQQQQQQQ123123');
        return (
          // 导航菜单
          <div>
            <Menu mode='horizontal' theme='dark' onClick={this.MenuInfo}>
                  { this.renderMenu() }
            </Menu>
           {/*  banner  */}

          </div>
        )
    }
    renderMenu(){
      return this.state.MenuInfo.map(item =>{
        return (
          <SubMenu title={item.title}
          key={item.key}>
              {item.children.map(child=>{
                return (
                <Menu.Item onClick={()=>{this.toJump(child)}} key={child.path}>{child.title}</Menu.Item>
                )
              })}
          </SubMenu>
        )
      })
    }
    toJump(child){
        console.log(child,'QQQQQQQQQQQQQQQQQQQQQQ');
    }
    MenuInfo = ({item,key,keyPath,domEvent}) => {

      console.log('好哈111111111111',this);
        console.log(item);
        console.log(key);
        console.log(keyPath);
        console.log(domEvent);
        this.props.history.push({
          pathname:key
        })
    } 
    componentDidMount(){
      this.getHeadData()
    }
    async getHeadData(){
        let res =await Api.head.getHead()
        console.log(res,'头部数据');
        this.setState({
          MenuInfo:res
        })
    }
}

export default withRouter(Header) 