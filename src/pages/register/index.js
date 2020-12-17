/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-17 09:21:15
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-17 16:26:19
 * @message: 
 */
import React, { useState, useEffect } from 'react';
import { List, InputItem, WhiteSpace,Button,Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import style from './index.less';
 function Register(props){
  const { getFieldProps } =props.form;
  const [password,setPassword]=useState('')
  const [username,setUsername]=useState('')
  const changeVal=(value,type)=>{ 
    if(type==='password'){
      setPassword(value)
    }else{
      setUsername(value)
    }
  }
  const registerFn=()=>{
    if(!password||!username){
      return Toast.fail('请填写完整信息')
    }
  }
  return(
    <div className={style.registerPage}>
      <List renderHeader={() =>'注册'}>
         <InputItem
          {...getFieldProps('username')}
          value={username}
          onChange={(e)=>changeVal(e,'username')}
          >用户名</InputItem>
          <InputItem
          {...getFieldProps('password')}
          value={password}
          onChange={(e)=>changeVal(e,'password')}
          >密码</InputItem>
          <Button type='primary' onclick={registerFn}> 注册</Button>
      </List>
    </div>
  )
}
export default createForm()(Register)
