/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-21 15:29:48
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-29 13:20:00
 * @message: 
 */
import React, { useState, useEffect } from 'react';
import { TextareaItem, Button, Toast } from 'antd-mobile';
import { Modal } from '@/components';
import style from '../../index.less'
import {useHttpHook} from '@/hooks'
import {timer} from '@/utils'
import { StoreContext, useStoreHook } from 'think-react-store';
 function Footer (props) {
  const [show, setShow] = useState(false);
  const [commentsValue, setCommentsValue] = useState();
  const {house:{addMessage}} = useStoreHook()
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

  const handleSubmit =() => {
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
     addMessage({
       userId:localStorage.getItem('id'),
       houseId:props.id,
       msg:commentsValue,
       createTime:timer(new Date())
     })
      setShow(false)
      props.resetData()
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
        show={show}
        styleBody={{
          height: '220px',
          bottom: '0px',
          top: 'unset'
        }}
        onClose={handleClose}
      >
        <div className={style.modalComment}>
          <TextareaItem
            rows={2}
            count={200}
            onChange={handleChange}
          />
          <Button className={style.commentBtn} type='warning' onClick={handleSubmit}>评论</Button>
        </div>
      </Modal>
    </>
  )
}
export default Footer