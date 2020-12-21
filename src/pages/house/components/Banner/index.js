/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-21 09:19:51
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-21 14:04:06
 * @message: 
 */
import React from 'react';
import AwesomeSwiper from 'react-awesome-swiper';
import style from '../../index.less'
function Banner(props){
  const {data}=props
  const config={
    loop: true,
    autoplay: {
      delay: 1500
    },
    pagination: {
      el: '.swiper-pagination'
    }
  }
  return(
    <AwesomeSwiper config={config} className={style.banner_info}>
    <div className="swiper-wrapper">
       {
         data?data.map(item=>(
          <div className='swiper-slide' key={item.id}>
            <img alt='banner' src={item} />
          </div>
         )):''
       }
    </div>
    <div className="swiper-pagination"></div>
  </AwesomeSwiper>
  )
}
export default Banner
