
import React, { PureComponent } from 'react'
import './index.scss'
class Captcha extends PureComponent {
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
                <div className="slide">
                    <button onMouseDown={this.down}
                    onMouseMove = {this.move}
                    onMouseUp = {this.end}
                     className='slideBtn'
                     style={{left:this.state.left}}>
                        12
                    </button>
                </div>
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
      this.setState({
          left:diff
      })
    }
}

export default Captcha