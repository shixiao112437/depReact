import React, { PureComponent } from 'react'
import {BrowserRouter as Router,Route, Redirect} from 'react-router-dom'

import Login from './pages/Login/index.jsx'
import Home from './pages/Home/index.jsx'
import Vue from './pages/Vue/index.jsx'
import NodeContent from './pages/Node/index'
class App extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
       
        }
    }

    render() {
        return (
            <Router>
                    <Route 
                      exact 
                      path="/" 
                      render={(props)=>{ //props组件的我们经常用的那个props 现在没什么用
                        // 重定向  重新跳转 到首页 /home/index
                        return <Redirect to="/login"></Redirect>
                      }}
                    ></Route>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/home' component={Home}></Route>
                <Route exact path='/vue/123' component={Vue}></Route>
                <Route  path='/node' component={NodeContent}></Route>
            </Router>
        )
    }
}

export default App