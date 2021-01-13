import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import './index.scss'
class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list:['one','two','three','four']
        }
    }

    render() {
        return (
            <div className='Footer'>
                {this.renderItem()}
             
            </div>
        )
    }
    renderItem(){
     return   this.state.list.map((item)=>{
        return (
            <div  key={item} className={`item ${this.props.location.pathname.indexOf(item)>-1?'active':''}`}
             onClick={() =>{
                this.toJump(item)
            }}>
                {item}
            </div>
        )
     })
    }
    toJump = (num) => {
        this.props.history.push({
            pathname:`/home/${num}` 
        })
    }
    componentDidMount(){
    
    }
}

export default withRouter(Footer)