/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-17 09:21:15
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-25 10:27:42
 * @message: 
 */
import React, { useState, useEffect,useContext } from 'react';
import { StoreContext, useStoreHook } from 'think-react-store';
import { List ,Button} from 'antd-mobile';
import style from './index.less'
import router from 'umi/router';
import { useHttpHook} from '@/hooks'
export default function (props){
  const {user:{id,layoutFn}} = useStoreHook()
  const [data]=useHttpHook({
    url:'/user/detail',
    body:{
      username:localStorage.getItem('username')
    }
  })
  const handleClick=()=>{
    router.push({
      pathname: '/user/edit',
    })
  }
  const layout=()=>{
    layoutFn()
  }
  return(
    <div className={style.userPage}>
      {/**用户信息 */}
      <div className={style.info}>
        <div className={style.set} onClick={handleClick}>设置</div>
        <div className={style.user}>
          <img alt='user' src={data?.avatar} />
          <div className={style.tel}>{data?.phone}</div>
          <div className={style.sign}>{data?.sign}</div>
        </div>
      </div>
      {/**列表 */}
      <div className={style.lists}>
        <List>
          <List.Item arrow='horizontal'>
            用户协议
          </List.Item>
          <List.Item arrow='horizontal'>
            常见问题
          </List.Item>
          <List.Item arrow='horizontal'>
            联系客服
          </List.Item>
        </List>
      </div>
      <Button type="warning" onClick={layout}>退出</Button>
    </div>
  )
}
