import React, { PureComponent } from 'react'
import './index.scss'
class ContentNav extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        console.log('QQQQQQQQQQQQQQ',this.props);
        return (
            <div className='ContentNav'>
                1111
                <h1>{this.props.currentNav}</h1>
            </div>
        )
    }
}

export default ContentNav