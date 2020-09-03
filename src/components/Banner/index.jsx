import React, { PureComponent } from 'react'
import banner1 from '../../assets/images/banner1.png'
import banner2 from '../../assets/images/banner2.png'
import banner3 from '../../assets/images/banner3.png'
import banner4 from '../../assets/images/banner4.png'
import style from './index.module.scss'
import {Carousel}  from 'antd' // 轮播图
const BannerInfo=[banner1,banner2,banner3,banner4]
class Banner extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Carousel autoplay={true}>
                {this.renderBanner()}
            </Carousel>
        )
    }
    renderBanner(){
        return BannerInfo.map((item,index) => {
            return (
                <img className={style.img} src={item} alt="" key={index}  />
            )
        })
    }
}

export default Banner