/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-21 14:10:46
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-29 14:15:57
 * @message: 
 */
import React, { useState, useEffect } from 'react';
import { timer } from '@/utils';
import style from '../../index.less'
export default function (props) {
  const [state, setState] = useState()
  useEffect(() => {

  }, [])
  return (
    <div className={style.comment}>
      <h1 className={style.commentTitle}>评论</h1>
      <div className={style.commentLists}>
        {props?.lists?.map(item => (
          <div className={style.commentListsItem} key={item?.id}>
            <img alt='user' className={style.avatar} src={item?.user?.avatar} />
            <div className={style.right}>
              <div className={style.rightTop}>
                <p>{item?.username}</p>
                <p>{timer(item?.createTime)}</p>
              </div>
              <div className={style.rightBottom}>
                {item?.msg}
              </div>
            </div>
          </div>
        ))}
      </div>
      {
              props.isMoreData?<div id="mkLoading" className={style.mkLoading}>加载中......</div>:
              <div className={style.mkLoading}>没有更多数据......</div>
            }
    </div>
  )
}