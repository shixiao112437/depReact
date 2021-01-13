
import React, { Component } from 'react'
import { Slider } from 'antd';
import './index.scss'
import PropTypes from 'prop-types'
class Captcha extends Component {
    state = {
        down:false,
        left:10,
        startX:null,
        endX:null,
    }

    render() {
        return (
            <div className='captcha'>
                <div className="canvasWrap">
                    <canvas></canvas>
                    <canvas></canvas>
                </div>
                <div className="slide" onMouseMove={this.movewrap}>
                    <button onMouseDown={this.down}
                    onMouseMove = {this.move}
                    onMouseUp = {this.end}
                     className='slideBtn'
                     style={{left:this.state.left}}>
                        12
                    </button>
                </div>

                <Slider
                    min={1}
                    max={300}
                    onChange={this.onChange}

                />
            </div>
        )
    }
    down = (e) => {
        console.log(e.clientX,'水平距离');
        this.setState({
            down:true,
            startX:e.clientX
        })
    }
    end = (e) => {
        console.log(e.clientX,'水平距离');
        this.setState({
            down:false,
            end:e.clientX
        })
    }
    move = (e) => {
        if(!this.state.down) return
        const diff = e.clientX-this.state.startX
        if(diff<0||diff>300) return false
        this.setState({
            left:diff,
            endX:e.clientX

        })
    }
    onChange = (val) => {
        console.log(val);
    }
}
// Captcha.PropTypes = {
//     title:PropTypes.string,
// }
export default Captcha