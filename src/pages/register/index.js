/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-17 09:21:15
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-24 16:16:21
 * @message: 
 */
import React, { useState } from 'react';
import { List, InputItem,Button,Toast } from 'antd-mobile';
import { StoreContext, useStoreHook } from 'think-react-store';
import { createForm } from 'rc-form';
import style from './index.less';
 function Register(props){
  const { getFieldProps , validateFields} =props.form;
  const {user:{RegisterFn}} = useStoreHook()
  // const [password,setPassword]=useState('')
  // const [username,setUsername]=useState('')
  // const changeVal=(value,type)=>{ 
  //   if(type==='password'){
  //     setPassword(value)
  //   }else{
  //     setUsername(value)
  //   }
  // }
  const registerFn=()=>{
    validateFields((err,value)=>{
      if(err){
        Toast.error(err)
        return
      }
      RegisterFn(value)
    })
  }
  return(
    <div className={style.registerPage}>
      <List renderHeader={() =>'注册'}>
         <InputItem
          {...getFieldProps('username',{ rules: [{ required: true }]})}
         // value={username}
          //onChange={(e)=>changeVal(e,'username')}
          >用户名</InputItem>
          <InputItem
          {...getFieldProps('password',{ rules: [{ required: true }]})}
          //value={password}
          
         // onChange={(e)=>changeVal(e,'password')}
          >密码</InputItem>
      </List>
      <Button type='primary' onClick={registerFn}> 注册</Button>
    </div>
  )
}
export default createForm()(Register)
