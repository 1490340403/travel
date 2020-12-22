/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-16 15:08:14
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-22 15:13:27
 * @message: 
 */
import { StoreProvider } from 'think-react-store'
import Footer from '@/components/Footer'
import * as store from '../store';
function BasicLayout(props) {
  const path=['/','/my','/order']
  const pathName=props.location.pathname
  const isShow=!path.includes(pathName)
  const FooterProps={
    pathName,
    isShow
  }
  return (
    <StoreProvider store={store}>
      <Footer {...FooterProps}/>
      {props.children}
    </StoreProvider>
  );
}

export default BasicLayout;
