import React, { PureComponent } from 'react'

import Footer from '../../components/Footer/index'
import Header from '../../components/Header/index'
import Banner from '../../components/Banner/index'
import SlideMenu from '../../components/SlideMenu/index'
import ContentNav from '../../components/ContentNav/index'
import './index.scss'
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
            <Banner></Banner>
            <div className='bodyWrap'>
                <div className='navs'>
                <SlideMenu changeNav={this.changeNav}></SlideMenu>
                </div>
                <div className='content'>
                 <ContentNav currentNav={this.state.currentNav}></ContentNav>
                </div>
            </div>
           
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