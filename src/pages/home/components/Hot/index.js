/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-17 13:53:19
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-25 15:30:45
 * @message: 
 */
import React, { useState, useEffect, memo } from 'react';
// import { history } from 'umi';
import router from 'umi/router';
import  style from '../../index.less'
function Hot(props) {
  const handleClick = (id) => {
    router.push({
      pathname: '/house',
      query: {
        id
      }
    });
  }
  return (
    <div className={style.hot}>
      <h1>最热民宿</h1>
      <div className={style.hotLists}>
        {props?.houses?.map(item => (
          <div className={style.hotListsItem} key={item.id} onClick={() => handleClick(item.id)}>
            <img className={style.img} alt='img' src={item?.imgs[0]?.url} />
            <div className={style.title}>{item.title}</div>
            <div className={style.info}>{item.info}</div>
            <div className={style.price}>￥{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(Hot);