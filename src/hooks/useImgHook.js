/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-18 16:30:04
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-18 17:18:04
 * @message: 
 */
import {useEffect} from 'react'
import {isEmpty} from 'project-libs'
let observer;
export default function useImgHook(ele, callback, watch = []){
  useEffect(()=>{
    const nodes = document.querySelectorAll(ele);
    if(!isEmpty(nodes)){
      observer = new IntersectionObserver((entries)=>{
        callback && callback(entries);
        entries.forEach(item => {
          if(item.isIntersecting){
            const dataSrc = item.target.getAttribute('data-src');
            item.target.setAttribute('src', dataSrc);
            observer.unobserve(item.target);
          }
        });
      });
      nodes.forEach(item => {
        observer.observe(item);
      });
    }

    return () => {
      if(!isEmpty(nodes) && observer){
        observer.disconnect();
      }
    }
  }, watch)
}
