/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-22 13:34:20
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-25 09:29:28
 * @message: 
 */
export default {
  'post /api/user/detail1': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 10,
        username: '测试用户',
        avatar: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
        tel: 123456789001,
        sign: '花桥流水'
      }
    });
  },
  'post /api/user/edit1': (req, res) => {
    res.json({
      status: 200,
      data: 'ok'
    });
  },
  'post /api/user/login1': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 100,
        username: 'admin'
      }
    });
  },
  'post /api/user/register1': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 100,
        username: 'admin'
      }
    });
  }
};