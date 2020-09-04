import React, { PureComponent } from 'react'
import { Route,Redirect } from 'react-router-dom'
import NodeNav from './component/NodeNav'
import Node  from './index.module.scss' 
import Egg from './egg/index'
import Fs from './fs/index'
import Http from './http/index'
import Koa from './koa/index'
class NodeContent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className={Node.wrap}>
                <div className={Node.nav}>
                    <NodeNav></NodeNav>
                </div>
                <div className={Node.content}>
                  <Route 
                      exact 
                      path="/" 
                      render={(props)=>{ //props组件的我们经常用的那个props 现在没什么用
                        // 重定向  重新跳转 到首页 /home/index
                        return <Redirect to="/node/fs"></Redirect>
                      }}
                   ></Route>
                  <Route exact path="/node/fs" component={Fs}></Route>
                  <Route exact path="/node/http" component={Http}></Route>
                  <Route exact path="/node/koa" component={Koa}></Route>
                  <Route exact path="/node/egg" component={Egg}></Route>
                </div>
            </div>
         
        )
    }
}

export default NodeContent