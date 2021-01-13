import React, { Component } from 'react'
import { Button } from 'antd';
import './index.scss'
import { withRouter } from 'react-router-dom';
class ContentNav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        console.log('QQQQQQQQQQQQQQ',this.props);
        return (
            <div className='ContentNav'>
                <h1>{this.props.currentNav}</h1>
                <div className='btn'>
                 <Button block onClick={this.toJump}>了解详情</Button>
                </div>
            </div>
        )
    }
    toJump = () =>  {
        console.log(this,'QQQQQQQQQQQQQQ11111111111111111111')

        this.props.history.push({
            pathname:'/vue/123',
            state:{
                id:'123',
                name:'哈哈哈哈'
            }
        })
    } 
}

export default withRouter(ContentNav) 