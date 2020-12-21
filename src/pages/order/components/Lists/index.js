/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-21 16:50:32
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-21 17:30:29
 * @message: 
 */
import React, { useState, useEffect } from 'react';
export default function (props){
  return (
    <>
    <style>
      {
        `
        // .am-tabs-tab-bar-wrap {
        //   position: fixed;
        //   top: 0;
        //   left: 0;
        //   width: 100%;
        //   z-index: 2000;
        // }
        // .am-tabs-content-wrap {
        //   margin-top: 50px;
        //   margin-bottom: 60px;
        // }
        // .am-activity-indicator.am-activity-indicator-toast {
        //   top: 25px;
        // }
        // .am-tabs-default-bar-underline{
        //   display:none;
        // }
        `
      }
    </style>
    <div>{props.data}</div>
    </>
  )
}