/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-17 10:07:36
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-17 13:32:56
 * @message: 
 */
import React, { useState} from 'react';
import { BsHouseDoorFill, BsHouseDoor, BsBagFill, BsBag, BsPersonFill, BsPerson } from 'react-icons/bs';
import { TabBar} from 'antd-mobile';
import router from 'umi/router';
export default function (props){
  const {isShow,pathName}=props
  const [tab,setTab]=useState( [
    {
      title: '首页',
      selectedIcon: <BsHouseDoorFill style={{fontSize: '1.5rem'}}/>,
      icon: <BsHouseDoor style={{fontSize: '1.5rem'}}/>,
      link: '/'
    },
    {
      title: '订单',
      selectedIcon: <BsBagFill style={{fontSize: '1.5rem'}}/>,
      icon: <BsBag style={{fontSize: '1.5rem'}}/>,
      link: '/order'
    },
    {
      title: '我的',
      selectedIcon: <BsPersonFill style={{fontSize: '1.5rem'}}/>,
      icon: <BsPerson style={{fontSize: '1.5rem'}}/>,
      link: '/my'
    },
  ])
  return(
    <>
    <style>
      {
        `
        .am-tab-bar {
          position: relative;
          overflow: visible !important;
        }
        .am-tabs {
          width: 100%;
          overflow: visible !important;
        }
        .am-tabs-pane-wrap {
          overflow-y: visible !important;
        }
        .am-tab-bar-item {
          height: auto !important;
        }
        .am-tabs-tab-bar-wrap {
          -ms-flex-negative: 0;
          flex-shrink: 0;
          position: fixed !important;
          width: 100%;
          bottom: 0px;
          left: 0px;
          right: 0px;
          z-index: 10;
        }
        `
      }
    </style>
    <div className='menuBar'>
       <TabBar hidden={isShow}>
         {
           tab.map(item=>(
             <TabBar.Item
               title={item.title}
               icon={item.icon}
               selectedIcon={item.selectedIcon}
               key={item.link}
               selected={item.link===pathName}
               onPress={()=>{router.push(item.link)}}
              />
           ))
         }
       </TabBar>
    </div>
    </>
  )
}
