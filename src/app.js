import { router } from "umi"

/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-23 09:34:09
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-24 17:37:07
 * @message: 
 */
//import router from 'umi/router';
import { cookie } from 'project-libs';
export function onRouteChange({ location, routes, action }) {
  const nowPath=routes[0].routes.filter(item=>item.path === location.pathname)
  const isLogin = localStorage.getItem('token')

  if(nowPath.length === 1 && nowPath[0].auth && !isLogin){
    router.push({
      pathname: '/login',
      query: {
        from: location.pathname
      }
    });
  }
  
}