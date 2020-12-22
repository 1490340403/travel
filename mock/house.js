/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-21 09:30:59
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-22 16:42:45
 * @message: 
 */
export default{
  'post /api/bannerInfo':(req,res)=>{
    res.json({
      status:200,
      data: {
        id: 8,
        banner: [
          'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
          'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
          'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
        ],
        info: {
          title: '老城民宿',
          msg: '老城区风景秀美',
          price: '220',
          publishTime: 1595238771000,
          startTime: 1595238771000,
          endTime: 1597917171000,
        }
      }
    });
  },
  'post /api/comments/lists': (req, res) => {
    setTimeout(() => {
      let data;
      if (req.body.pageNum < 4) {
        data = [
          {
            id: 1,
            avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
            username: 'user',
            createTime: 1595238771000,
            info: '房屋很满意'
          },
          {
            id: 2,
            avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
            username: 'user',
            createTime: 1595238771000,
            info: '空气清新'
          },
          {
            id: 3,
            avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
            username: 'user',
            createTime: 1595238771000,
            info: '态度温和'
          },
          {
            id: 4,
            avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
            username: 'user',
            createTime: 1595238771000,
            info: '早餐味道美'
          },
          {
            id: 5,
            avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
            username: 'user',
            createTime: 1595238771000,
            info: '态度温和'
          },
          {
            id: 6,
            avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
            username: 'user',
            createTime: 1595238771000,
            info: '早餐味道美'
          },
          {
            id: 7,
            avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
            username: 'user',
            createTime: 1595238771000,
            info: '态度温和'
          },
          {
            id: 8,
            avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
            username: 'user',
            createTime: 1595238771000,
            info: '早餐味道美'
          },
        ]
      } else {
        data = [];
      }
      res.json({
        status: 200,
        data
      });
    }, 100);
  },
  'post /api/comments/add': (req, res) => {
    setTimeout(()=>{
      res.json({
        status: 200,
        data: 'ok'
      });
    },3000)
   
  }
}