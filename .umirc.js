/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-16 15:08:14
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-22 13:50:26
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
          path:'/order',
          component: '../pages/order'
        },
        {
          path:'/observer',
          component: '../pages/observer'
        },
        {
          path:'/user/edit',
          component: '../pages/my/components/Edit'
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
