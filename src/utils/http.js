/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-17 13:57:47
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-24 17:56:32
 * @message: 
 */
import { Toast } from 'antd-mobile';

export default function Http({
  url,
  method = 'post',
  headers,
  body = {},
  setLoading,
  setResult,
}){
  setLoading && setLoading(true);
  const token=localStorage.getItem('token')?{'token':localStorage.getItem('token')}:{}
   let defaultHeader= {
    'Content-type': 'application/json',
     ...token
  };

  let params;
  if(method.toUpperCase() === 'GET'){
    params = undefined;
  }else {
    params = {
      headers: {
        ...defaultHeader,
        headers
      },
      method,
      body: JSON.stringify(body)
    }
  }

  return new Promise((resolve, reject)=>{
    fetch('/api' + url, params)
      .then(res => res.json())
      .then(res => {
        if(res.status === 200){
          console.log('status',res.data)
          resolve(res.data);
          setResult && setResult(res.data);
        }else {
          Toast.fail(res.errMsg);
          reject(res.errMsg);
        }
      })
      .catch(err => {
        Toast.fail(err);
        reject(err);
      })
      .finally(() => {
        setLoading && setLoading(false);
      })
  });
}