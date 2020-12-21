/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-21 09:48:44
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-21 13:56:23
 * @message: 
 */
import React, { useState, useEffect } from 'react';
import { Button } from 'antd-mobile';
import { timer } from '@/utils';
import style from '../../index.less'
export default function(props){
  const [state, setState] = useState()
  

  useEffect(() => {

  }, [])

  return (
    <div className={style.info}>
      <div className={style.infoTitle}>{props?.detail?.title}</div>
      <div className={style.infoMsg}>简介：{props?.detail?.msg}</div>
      <div className={style.infoPrice}>价格：{props?.detail?.price}</div>
      <div className={style.infoTime}>发布时间：{timer(props?.detail?.publishTime)}</div>
      <div className={style.infoTime}>开始出租：{timer(props?.detail?.startTime, '')}</div>
      <div className={style.infoTime}>结束出租：{timer(props?.detail?.endTime, '')}</div>
      <Button className={style.infoBtn} type='warning'>预定</Button>
    </div>
  )
}
