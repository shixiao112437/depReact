import React, { Component } from 'react'

class AAA extends Component {
    state= {
        x:document.documentElement.clientWidth,
        y:document.documentElement.clientHeight,
    }
    render(){
        return <>
            <div>
                AAA组件
                <p>x{this.state.x}</p>
                <p>y{this.state.y}</p>
            </div>
        </>
    }
    // 获取浏览器的宽高
    getSize = () =>{
        this.setState({
            x:document.documentElement.clientWidth,
            y:document.documentElement.clientHeight,
        })
    }
    componentDidMount(){
        window.addEventListener('resize',this.getSize)
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.getSize)
    }
    
}
class BBB extends Component {
    state= {
        x:document.documentElement.clientWidth,
        y:document.documentElement.clientHeight,
    }
    render(){
        return <>
            <div>
                BBB组件
                <p>x{this.state.x}</p>
                <p>y{this.state.y}</p>
            </div>
        </>
    }
    // 获取浏览器的宽高
    getSize = () =>{
        this.setState({
            x:document.documentElement.clientWidth,
            y:document.documentElement.clientHeight,
        })
    }
    componentDidMount(){
        window.addEventListener('resize',this.getSize)
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.getSize)
    }
    
}

// 接受一个组件Com
function WithGetSize (Com) {
    // 返回一个组件
    return    class extends Component{
        state= {
            x:document.documentElement.clientWidth,
            y:document.documentElement.clientHeight,
        }
        getSize = () =>{
            this.setState({
                x:document.documentElement.clientWidth,
                y:document.documentElement.clientHeight,
            })
        }
        componentDidMount(){
            window.addEventListener('resize',this.getSize)
        }
        componentWillUnmount(){
            window.removeEventListener('resize',this.getSize)
        }
        render(){
            
            return <Com {...this.state}/> // 返回的组件有2个自定义属性(props传参)
        }
    }
}

const NewAAA  = WithGetSize(AAA)
const NewBBB  = WithGetSize(BBB)
class NodeNet extends Component {
    render() {
        return (
            <div>
               <AAA></AAA>
               <hr/>
               <BBB></BBB>
               <hr/>
               withAAA
               <NewAAA></NewAAA>
               <hr/>
               withBBB
               <NewBBB></NewBBB>
            </div>
        )
    }
}

export default NodeNet