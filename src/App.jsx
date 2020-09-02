import React, { PureComponent } from 'react'
import {BrowserRouter as Router,Route, } from 'react-router-dom'

import Login from './pages/Login/index.jsx'
import Home from './pages/Home/index.jsx'

class App extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
       
        }
    }

    render() {
        return (
            <Router>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/home' component={Home}></Route>
            </Router>
        )
    }
}

export default App