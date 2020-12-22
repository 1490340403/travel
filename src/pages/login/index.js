/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-17 09:21:15
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-22 15:50:45
 * @message: 
 */
import React, { useState, useEffect } from 'react';
import { List, InputItem, WhiteSpace,Button,Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { StoreContext, useStoreHook } from 'think-react-store';
import router from 'umi/router';
import style from './index.less';

 function Login(props){
  const { getFieldProps,validateFields } =props.form;
  const {user:{LoginFn}} = useStoreHook()
  const Logins=()=>{
    validateFields((err,value)=>{
      if(err){
        Toast.error(err)
        return
      }
      LoginFn(value)
  })
}
  const handleClick=()=>{
    router.push('/register')
  }
  return(
    <div className={style.registerPage}>
      <List renderHeader={() =>'登录'}>
         <InputItem
          {...getFieldProps('username',{required:true})}
          >用户名</InputItem>
          <InputItem
          {...getFieldProps('password',{required:true})}
          >密码</InputItem>
          <Button type='primary' onClick={Logins}> 登录</Button>
          <div className={style.register} onClick={handleClick}>没有账户，去注册</div>
      </List>
    </div>
  )
}
export default createForm()(Login)
