/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-17 09:21:15
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-22 17:41:31
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
    url:'/comments/lists',
    body:{
      ...page,
      id
    },
    watch:[page.pageNum,id]
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
const resetPage=()=>{
  setPage({
    pageSize:8,
    pageNum:1
  })
}
  return(
    <div className={style.housePage}>
      <Banner data={detail?.banner}/>
      <Info detail={detail?.info} />
      <List lists={commentList} isMoreData={isMoreData}/>
      <Footer resetData={resetPage}/>
    </div>
  )
}
