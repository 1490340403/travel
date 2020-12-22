/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-22 13:48:46
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-22 14:34:42
 * @message: 
 */
import React, { useState, useEffect } from 'react';
import {
  List, ImagePicker, Toast, InputItem, Button
} from 'antd-mobile';
import { createForm } from 'rc-form';
import {useHttpHook} from '@/hooks'
function Edit(props) {
  const [files, setFiles] = useState([]);
  const { getFieldProps, validateFields } = props.form;

  const handleChange = (files) => {
    // console.log(files)
    if (files[0]?.file?.size / 1024 / 1024 > 0.5) {
      Toast.fail('图片大小不能大于0.5M');
      return;
    }
    setFiles(files);
  };

  const handleSubmit = () => {
    if(!files.length){
      Toast.fail('请上传图片');
      return;
    }
    validateFields((error, value)=>{
      console.log(value,'value')
      if(error){
        Toast.fail('请将信息补充完整');
        return;
      }else {
      //   const [data]=useHttpHook({
      //     url:'/user/edit',
      //     body:{
      //       img: files[0].url,
      //       tel: value.tel,
      //       sign: value.sign
      //     }
      //   })
      //   console.log(data,'data')
      // }
      }
    });
   
  };

  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <div className='user-edit'>
      <List>
        <List.Item>
          <ImagePicker
            files={files}
            selectable={files.length < 1}
            onChange={handleChange}
          />
        </List.Item>
        <List.Item>
          <InputItem
            {...getFieldProps('tel', {
              rules: [{ required: true }],
              initialValue: ''
            })}
            placeholder='电话'
          >
            电话：
          </InputItem>
        </List.Item>
        <List.Item>
          <InputItem
            {...getFieldProps('sign', {
              rules: [{ required: true }],
              initialValue: ''
            })}
            placeholder='签名'
          >
            签名：
          </InputItem>
        </List.Item>
      </List>
      <Button type='warning' style={{ marginTop: '20px' }} onClick={handleSubmit}>修改</Button>
    </div>
  )
}

export default createForm()(Edit);