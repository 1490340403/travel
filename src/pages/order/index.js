/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-17 09:21:15
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-22 13:26:48
 * @message: 
 */
import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd-mobile';
import Lists from './components/Lists'
import style from './index.less'
import {useHttpHook,useObserverHook} from '@/hooks'
export default function (props){
  const [orders, setOrders] = useState([]);
  const [isMoreData,setIsMoreData]=useState(true)
  const [page,setPage] = useState({
    pageSize:8,
    pageNum:1
  })
  const [tabNum,setTabNum]=useState(0)
  const handleChange=(value)=>{
    setTabNum(value.sub)
    setPage({
      ...page,
      pageNum:1
    })
  }
  useObserverHook('#mkLoading',(entries)=>{
    if(entries[0].isIntersecting&&!loading){
      setPage({
        ...page,
        pageNum:page.pageNum+1
      })
    }
  },null)
  const tabs = [
    { title: '未支付', sub: 0 },
    { title: '已支付', sub: 1 }
  ];
  const [data,loading]=useHttpHook({
    url:'/order/lists',
    body:{
      pageSize:page.pageSize,
      pageNum:page.pageNum,
      sub:tabNum
    },
    watch:[tabNum,page.pageNum]
  })
  useEffect(() => {
    if(!loading&&data){
      if(data.length>0){
        setOrders([...data,...orders])
      }
      if(data.length<page.pageSize){
        setIsMoreData(false)
      }
    }
  },[loading])

  return (
    <>
    <style>
      {
        `
        .am-tabs-default-bar-top .am-tabs-default-bar-content{
          position: fixed;
          top: 0;
          background: #fff;
        }
        `
      }
    </style>
    <div className={style.orderPage}>
      <Tabs
        tabs={tabs}
        onChange={handleChange}
        tabBarPosition="top"
      >
        <div className={style.tab}>
          <Lists orders={orders} type={0}  isMoreData={isMoreData}/>
        </div>
        <div className={style.tab}>
          <Lists orders={orders} type={1} isMoreData={isMoreData}/>
        </div>
      </Tabs>
    </div>
    </>
  )
}
