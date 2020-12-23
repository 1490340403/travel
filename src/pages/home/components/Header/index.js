/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-17 13:35:42
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-23 10:49:28
 * @message: 
 */
import React, { memo } from 'react';
import Link from 'umi/link';
import  style from '../../index.less'
import { cookie } from 'project-libs';
function Header() {
  return (
    <div className={style.header}>
      <div className={style.header_title}>民宿</div>
      <div className={style.header_login}>
        {console.log(cookie.get('user'),cookie.get('user').username,'cookie')}
        <Link to='/login'>登录</Link> | <Link to='/register'>注册</Link>
      </div>
    </div>
  )
}

export default memo(Header);