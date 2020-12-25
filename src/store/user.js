/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-22 14:54:29
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-25 10:27:20
 * @message: 
 */
import {Http} from '@/utils'
import router from 'umi/router';
import { Toast } from 'antd-mobile';
import { cookie, urlGet } from 'project-libs';
export default{
  state:{
    id:'',
    user:{}
  },
  reducers:{
    update(state,payload){
      return{
        ...state,
        ...payload
      }
    }
  }, 
  effects:{
    async EditPerFn(dispatch,state,payload){
      const res= await Http({
        url:'/user/edit',
        body:payload
      })
      if (res) {
        Toast.success('编辑成功');
        router.push('/my');
      }
    },
    async RegisterFn(dispatch,state,payload){
     const res= await Http({
        url:'/user/register',
        body:payload
      })
      dispatch({
        type:'update',
        payload:{
          id:res.id
         }
      })
      if(res){
        localStorage.setItem('token',res.token)
        localStorage.setItem('username',res.username)
        Toast.success('注册成功')
        // router.push('/')
      }
    },
    async LoginFn(dispatch,state,payload){
      const res= await Http({
         url:'/user/login',
         body:payload
       })
       dispatch({
         type:'update',
         payload:{
          id:res.id
         }
       })
       if(res){
        localStorage.setItem('token',res.token)
        localStorage.setItem('username',res.username)
        Toast.success('登陆成功')
         //cookie.set('user',res)
        //  const path=urlGet('from')
        //  if(path){
        //    router.push(path)
        //  }else{
        //   router.push('/')
        //  }
       }
     },
     async layoutFn(dispatch,state,payload){
       const res=await Http({
         url:'/user/layout'
       })
       if(res){
         Toast.success('退出成功')
         localStorage.clear()
         router.push('/login')
       }
     }
  },
}