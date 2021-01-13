import React, { Component } from 'react'
import './index.scss'
const navs =[{
    title:111,
    path:'111'
},{
    title:222,
    path:'222'
},{
    title:333,
    path:'333'
},{
    title:444,
    path:'444'
},{
    title:555,
    path:'555'
},{
    title:666,
    path:'666'
},]
class SlideMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        console.log(this.props,'11111111111');
        return (
            <ul className='navs'>
                {this.renderNavs()}
            </ul>
        )
    }
    renderNavs(){
       return navs.map(item => {
           return (
           <li onClick={()=>{
               this.toJump(item)
           }} className='nav' key={item.path}>{item.title}</li>
           )
       }) 
    }
    toJump(item){
       this.props.changeNav(item)
    }
}

export default SlideMenu