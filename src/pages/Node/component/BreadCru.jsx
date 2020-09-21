import React, { PureComponent } from 'react'
import { Breadcrumb } from 'antd';
import { withRouter, Link } from 'react-router-dom';

import './bread.scss'
class BreadCru extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        console.log(this.props, 'wwwwwwwwwwwwwwwwwww');
        return (
            <div className='breadWrap'>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to="/home">Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{this.props.location.pathname.substring(6)}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}

export default withRouter(BreadCru)