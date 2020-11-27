import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom';
import './index.scss'
class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            list:['one','two','three','four']
        }
    }

    render() {
        console.log(this.props.children,'底部');
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