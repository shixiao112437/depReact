import React, { PureComponent } from 'react'

import Footer from '../../components/Footer/index'
import Header from '../../components/Header/index'

// import SlideMenu from '../../components/SlideMenu/index'
// import ContentNav from '../../components/ContentNav/index'

import One from '../Num/1.jsx'
import Two from '../Num/2'
import Three from '../Num/3'
import Four from '../Num/4'

import './index.scss'
import { Route } from 'react-router-dom'
class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            currentNav:'11111111111',
        }
    }

    render() {
        return (
        <div>
            <Header></Header>
                <Route path='/home/one' component={One}></Route>
                <Route path='/home/two' component={Two}></Route>
                <Route path='/home/three' component={Three}></Route>
                <Route path='/home/four' component={Four}></Route>
            <Footer></Footer>
        </div>
        )
    }
    changeNav=(value)=>{
        this.setState({
            currentNav: value.title
        });
    }
}

export default Home