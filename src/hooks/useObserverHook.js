/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-18 13:19:55
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-18 14:35:11
 * @message: 
 */
import {useEffect} from 'react';
let observer;
export default function useObserverHook(ele,callback,watch=[]) {
  useEffect(()=>{
    const node=document.querySelector(ele);
    if(node){
      observer=new IntersectionObserver(entries=>{
        callback&&callback(entries)
      })
      observer.observe(node)
    }
    return ()=>{
      if(node&&observer){
        //解绑
        observer.unobserve(node);
        //停止监听
        observer.disconnect();
      }
    }
  },watch)
}
