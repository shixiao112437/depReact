import React, { PureComponent } from 'react'
import Footer from '../../components/Footer/index'
import Header from '../../components/Header/index'
class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
        <div>
            <Header></Header>
            <h1>首页</h1>
            <Footer></Footer>

        </div>
        )
    }
}

export default Home