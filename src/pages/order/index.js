/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-17 09:21:15
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-21 17:49:39
 * @message: 
 */
import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd-mobile';
import Lists from './components/Lists'
import style from './index.less'
export default function (props){
  const [orders, setOrders] = useState([]);
  const handleChange=()=>{
    
  }
  const tabs = [
    { title: '未支付', sub: 0 },
    { title: '已支付', sub: 1 }
  ];
  return (
    <>
    <style>
      {
        `
        .am-tabs-tab-bar-wrap {
          position: fixed;
          top: 0px;
        }
        .am-tabs-default-bar-underline{
          top:43px !important;
        }
        `
      }
    </style>
    <div className={style.orderPage}>
      <Tabs
        tabs={tabs}
        onChange={handleChange}
      >
        <div className={style.tab}>
          <Lists orders={orders} type={0}  />
        </div>
        <div className={style.tab}>
          <Lists orders={orders} type={1}/>
        </div>
      </Tabs>
    </div>
    </>
  )
}
