/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-17 15:26:34
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-25 16:31:45
 * @message: 
 */
import React, { useState, useEffect } from 'react';
import { SearchBar, ActivityIndicator } from 'antd-mobile';
import { useHttpHook ,useObserverHook,useImgHook} from '@/hooks';


import style from './index.less';

export default function (props) {
 const [houseLists,setHouseLists]=useState([])
 const {city,startTime,endTime}=props.location.query
 const [houseName,setHouseName]=useState('')
 const [isMoreData,setIsMoreData]=useState(true)
 const [page,setPage]=useState({
   pageSize:8,
   pageNum:1
 })
 const [data,loading]=useHttpHook({
  url:'/house/search',
  body:{
    ...page,
    houseName,
    cityCode:city,
    startTime,
    endTime
  },
  watch:[page.pageNum,houseName]
})
useImgHook('.itemImg', (enties)=>{}, null);
useEffect(() => {
   if(!loading&&data) {
     if(data.length){
      setHouseLists([...houseLists,...data])
     }
     if(data.length<page.pageSize){
      setIsMoreData(false)
     }else{
      setIsMoreData(true)
     }
   }
},[loading])
  /**
   * 1，监听loading是否展示出来；
   * 2，修改分页数据；
   * 3，监听分页数据的修改，发送接口，请求下一页的数据；
   * 4，监听loading变化，拼装数据
   */

useObserverHook('#mkLoading',(entries)=>{
  if(entries[0].isIntersecting&&!loading){
    setPage({
      ...page,
      pageNum:page.pageNum+1
    })
  }
},null)
  const handleChange = (value) => {
    setHouseName(value)
  };
  const handleCancle = () => {
    setHouseName('')
  };

  const handleSubmit = (value) => {
    setPage({
      pageSize:8,
      pageNum:1
    })
    setHouseLists([])
  };

  return (
    <div className={style.searchPage}>
      {/**顶部搜索栏 */}
      <SearchBar
        placeholder='搜索民宿'
        value={houseName}
        onChange={handleChange}
        onCancel={handleCancle}
        onSubmit={handleSubmit}
      />
    {
      !houseLists.length?<ActivityIndicator toast />:
        <div className={style.result}>
          {
        houseLists.map(item => (
          <div className={style.item} key={item.id}>
            <img alt='img' className='itemImg' src={require('../../assets/blank.png')} data-src={item?.imgs[0]?.url} />
            <div className={style.itemRight}>
              <div className={style.title}>{item.name}</div>
              <div className={style.price}>{item.price}</div>
            </div>
            </div> 
            ))}
            {
              isMoreData?<div id="mkLoading" className={style.mkLoading}>加载中......</div>:
              <div className={style.mkLoading}>没有更多数据......</div>
            }
          </div>
      }
    </div>
  )
}