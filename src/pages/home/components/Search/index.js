/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-17 14:34:02
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-18 09:47:49
 * @message: 
 */
import React, { useState, useEffect, memo } from 'react';
import { Picker, List, Calendar, Button, Toast } from 'antd-mobile';
import router from 'umi/router';
import  style from '../../index.less'
import {timer} from '@/utils'
function Search(props) {
const [times,setTimes]=useState('')
const [dateShow,setDateShow]=useState(false)
const [selectedCity,setSelectedCity]=useState('')
 const handleCityChange=(value)=>{
  setSelectedCity(value)
 }
 const handleDate=()=>{
  setDateShow(!dateShow);
 }
 const handleClick=()=>{
    router.push({
      pathname: '/search',
      query: {
        city:selectedCity,
        startTime:times.split('~')[0],
        ensTime:times.split('~')[1]
      },
    })
 }
 const handleDateConfirm=(start,end)=>{
   if(start&&end){
    const time=timer(start,'notH')+'~'+timer(end,'notH')
    setTimes(time)
    setDateShow(false)
   }
   if(start&&!end||!start&&end){
    Toast.fail('请选择出租的起始时间')
    return;
   }
 }
  return (
    <div className={style.search}>
      {/**可选城市 */}
      <div className={style.searchAddr}>
        {!props.citysLoading && <Picker
          title='城市'
          data={props.citys}
          value={selectedCity}
          cascade={false}
          cols={1}
          onChange={handleCityChange}
        >
          <List.Item>可选城市</List.Item>
        </Picker>}
      </div>
      {/**可选时间 */}
      <div className={style.searchTime} onClick={handleDate}>
        <p className={style.searchTimeleft}>出租时间</p>
        <p className={style.searchTimeright}>{times}</p>
      </div>
      {/**点击按钮 */}
      <Button type='warning' size='large' onClick={handleClick}>搜索民宿</Button>
      <Calendar
        visible={dateShow}
        onCancel={handleDate}
        onConfirm={handleDateConfirm}
      />
    </div>
  )
}
//默认情况下其只会对 props 做浅层对比，遇到层级比较深的复杂对象时，
//表示力不从心了。对于特定的业务场景，可能需要类似 shouldComponentUpdate 
//这样的 API，这时通过 memo 的第二个参数来实现：
//注意：与 shouldComponentUpdate 不同的是，arePropsEqual 返回 true 时，
//不会触发 render，如果返回 false，则会。而 shouldComponentUpdate 刚好与其相反。
function areEqual(prevProps, nextProps){
   return prevProps.citysLoading===nextProps.citysLoading&&prevProps.citys===nextProps.citys?true:false
}
export default memo(Search,areEqual);