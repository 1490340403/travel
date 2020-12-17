/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-17 09:21:15
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-17 15:38:51
 * @message: 
 */
import React, { useState, useEffect } from 'react';
export default function (props){
  console.log(props)
  const {location:{query:{id}}}=props
  console.log(id)
  return(
    <div >
      house
    </div>
  )
}
