/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-21 16:50:32
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-22 13:12:44
 * @message: 
 */
import React, { useState, useEffect } from 'react';
import { ActivityIndicator,Button, Toast} from 'antd-mobile';
import { isEmpty } from 'project-libs';
import style from '../../index.less'
export default function (props){
  const renderPay = (item) => {
    switch (item.type) {
      case 0:
        return <Button type='warning' size='small'>去支付</Button>
      case 1:
        return <Button size='small'>已完成</Button>
      default:
        break;
    }
  };
  return (
    <>
    <style>
      {
        `
        `
      }
    </style>
    <div style={{marginTop:43,marginBottom:60}}>
    {isEmpty(props?.orders) ?
        <ActivityIndicator toast/> :
        <div className={style.tabLists}>
          {props.orders.map(item => (
           <div className={style.orderItem}>
           <img alt='order' src={item.img} />
           <div className={style.center}>
             <div className={style.title}>{item.title}</div>
             <div className={style.price}>￥{item.price}</div>
             <div className={style.time}>{item.createTime}</div>
           </div>
           <div className={style.pay}>
             {renderPay(item)}
           </div>
         </div>
          ))}
            {
              props.isMoreData?<div id="mkLoading" className={style.mkLoading}>加载中......</div>:
              <div className={style.mkLoading}>没有更多数据......</div>
            }
        </div>
      }
    </div>
    </>
  )
}