/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-21 15:29:48
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-21 16:26:49
 * @message: 
 */
import React, { useState, useEffect } from 'react';
import { TextareaItem, Button, Toast ,Modal} from 'antd-mobile';
import style from '../../index.less'
import {useHttpHook} from '@/hooks'
 function Footer (props) {
  const [show, setShow] = useState(false);
  const [commentsValue, setCommentsValue] = useState();

  const handleClick = () => {
    setShow(true)
  };

  const handleChange = (value) => {
    // console.log(value)
    setCommentsValue(value);
  };

  const handleClose = () => {
    setShow(false)
  };

  const handleSubmit = () => {
    if(!commentsValue){
      Toast.fail('请填写内容.')
    }else{
    //  useHttpHook({
    //     url:'/comments/add',
    //     body:{
    //       commentsValue
    //     }
    //   })
      // if(data){
      //   Toast.success('添加成功。')
      // }
      setShow(false)
    }
  };

  useEffect(() => {

  }, [])

  return (
    <>
      <div className={style.footer} onClick={handleClick}>
        评论~
      </div>
      <Modal
        visible={show}
        onClose={handleClose}
      >
        <div className={style.modalComment}>
          <TextareaItem
            rows={2}
            count={200}
            onChange={handleChange}
          />
          <div style={{marginTop:20}}></div>
          <Button className={style.commentBtn} type='warning' onClick={handleSubmit}>评论</Button>
        </div>
      </Modal>
    </>
  )
}
export default Footer