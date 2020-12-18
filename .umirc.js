/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-16 15:08:14
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-18 10:45:32
 * @message: 
 */

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/home' },
        { path: '/order', component: '../pages/order' },
        { path: '/my', component: '../pages/my' },
        {
          path:'/login',
          component: '../pages/login'
        },
        {
          path:'/register',
          component: '../pages/register'
        },
        {
          path:'/search',
          component: '../pages/search'
        },
        {
          path:'/house',
          component: '../pages/house'
        },
        {
          path:'/observer',
          component: '../pages/observer'
        }
      ]
    },
  
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'create',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
