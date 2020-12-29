/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-21 09:48:44
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-29 17:12:23
 * @message: 
 */
import React, { useState, useEffect } from 'react';
import { Button } from 'antd-mobile';
import { timer } from '@/utils';
import style from '../../index.less'
import {Http} from '@/utils'
export default function(props){
  console.log(props.isPayed)
  const [state, setState] = useState(0)
  

  useEffect(() => {
   if(state==1){
    Http({
      url:'/order/updateOrder',
      body:{
        isPayed:0,
        houseId:props.id,
        userId:localStorage.getItem('id'),
      }
    })
   }else if(state==2){
    Http({
      url:'/order/updateOrder',
      body:{
        isPayed:1,
        houseId:props.id,
        userId:localStorage.getItem('id'),
      }
    })
   }
  }, [state])

  return (
    <div className={style.info}>
      <div className={style.infoTitle}>{props?.detail?.title}</div>
      <div className={style.infoMsg}>简介：{props?.detail?.msg}</div>
      <div className={style.infoPrice}>价格：{props?.detail?.price}</div>
      <div className={style.infoTime}>发布时间：{timer(props?.detail?.publishTime)}</div>
      <div className={style.infoTime}>开始出租：{timer(props?.detail?.startTime, '')}</div>
      <div className={style.infoTime}>结束出租：{timer(props?.detail?.endTime, '')}</div>
      {
        props.isPayed==1?(<Button className={style.infoBtn} onClick={()=>{setState(1)}}  type='warning'>预定</Button>):
        (<Button className={style.infoBtn} type='warning' onClick={()=>{setState(2)}}>取消</Button>)
      }
      
    </div>
  )
}
