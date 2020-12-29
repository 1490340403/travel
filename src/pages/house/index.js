/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-17 09:21:15
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-29 16:28:55
 * @message: 
 */
import React, { useState, useEffect } from 'react';
import Banner from './components/Banner'
import Info from './components/Info'
import List from './components/List'
import Footer from './components/Footer'
import { StoreContext, useStoreHook } from 'think-react-store';
import { useHttpHook ,useObserverHook} from '@/hooks';

import style from './index.less'

export default function (props){
  const [commentList,setCommentList]=useState([])
  const [isMoreData,setIsMoreData]=useState(true)
  const {house:{isPostMsg}} = useStoreHook()
  const [page,setPage]=useState({
    pageSize:8,
    pageNum:1
  })
  const {location:{query:{id}}}=props
  const [detail]=useHttpHook({
    url:'/bannerInfo',
  })
  const [data,loading]=useHttpHook({
    url:'/comments/list',
    body:{
      ...page,
      userId:localStorage.getItem('id'),
      houseId:id
    },
    watch:[page.pageNum,id]
  })
  const [isOrder]=useHttpHook({
    url:'/order/isOrder',
    body:{
      userId:localStorage.getItem('id'),
      houseId:id
    }
  })
useEffect(()=>{
  if(!loading&&data){
    setCommentList([...commentList,...data])
    if(data.length<page.pageSize){
      setIsMoreData(false)
    }
  }
},[loading])
useObserverHook('#mkLoading',(entries)=>{
  if(entries[0].isIntersecting&&!loading){
    setPage({
      ...page,
      pageNum:page.pageNum+1
    })
  }
},null)
const usePage=()=>{

}
  return(
    <div className={style.housePage}>
      <Banner data={detail?.banner}/>
      <Info isOrder={isOrder} detail={detail?.info} isPayed={isOrder?.isPayed} id={id}/>
      <List lists={commentList} isMoreData={isMoreData}/>
      <Footer resetData={usePage} id={id}/>
    </div>
  )
}
