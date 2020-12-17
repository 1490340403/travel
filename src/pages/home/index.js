/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-17 09:21:15
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-17 14:41:21
 * @message: 
 */
import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Search from './components/Search'
import Hot from './components/Hot'
import { useHttpHook } from '@/hooks';
import  style from './index.less'
export default function (props){
  //const [hot,setHot]=useState([])
    const [hot]=useHttpHook({
      url:'/house/hot'
    })
    const [citys, citysLoading] = useHttpHook({
      url: '/commons/citys'
    });
  return(
    <div className={style.home}>
      <Header/>
      <Search citys={citys} citysLoading={citysLoading}/>
      <Hot houses={hot}/>
    </div>
  )
}
