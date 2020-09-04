import React, { PureComponent } from 'react'
import './index.scss'
class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        console.log(this.props.children,'底部');
        return (
            <div className='Footer'>
                <div>
                    123
                </div>
                <div>
                    123
                </div>
                <div>
                    123
                </div>
                <div>
                    123
                </div>
            </div>
        )
    }
}

export default Footer