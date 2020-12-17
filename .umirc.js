
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
