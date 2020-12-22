/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-22 16:24:16
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-22 16:29:08
 * @message: 
 */
import {Http} from '@/utils'
import { Toast } from 'antd-mobile';
export default{
  state:{

  },
  reducers:{}, 
  effects:{
    async addMessage(display,state,payload){
      const res=await Http({
        url:'/comments/add',
        body:payload
      })
      if(res){
        Toast.success('留言成功')
      }
    }
  },
}
