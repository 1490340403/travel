/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-18 10:44:41
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-18 14:33:24
 * @message: 
 */
import React,{ useState, useEffect} from 'react';
import { useObserverHook } from '@/hooks';
export default function(props){
  // let observer;
  // useEffect(()=>{
  //   console.log('进入')
  //   observer =new IntersectionObserver(entries=>{
  //     console.log(entries)
  //   })
  //   observer.observe(document.querySelector('#loading'));
  //   return ()=>{
  //     console.log('离开')
  //     if(observer){
  //       //解绑
  //       observer.unobserve(document.querySelector('#loading'));
  //       //停止监听
  //       observer.disconnect();
  //     }
  //   }
  // },[])
  
  useObserverHook('#loading', (entries)=>{
    console.log(entries)
  });
  return (
     <div>
       observer is
       <div id="loading" style={{width:'100px',height:'100px',background:'#f60', marginTop:'1000px'}}>
         loading
       </div>
     </div>
  )
}