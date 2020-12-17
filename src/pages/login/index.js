/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-17 09:21:15
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-17 16:28:48
 * @message: 
 */
import React, { useState, useEffect } from 'react';
import { List, InputItem, WhiteSpace,Button,Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import router from 'umi/router';
import style from './index.less';
 function Login(props){
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
  const LoginFn=()=>{
    if(!password||!username){
      return Toast.fail('请填写完整信息')
    }
  }
  const handleClick=()=>{
    router.push('/register')
  }
  return(
    <div className={style.registerPage}>
      <List renderHeader={() =>'登录'}>
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
          <Button type='primary' onclick={LoginFn}> 登录</Button>
          <div className='register' onClick={handleClick}>没有账户，去注册</div>
      </List>
    </div>
  )
}
export default createForm()(Login)
