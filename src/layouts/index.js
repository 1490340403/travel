import styles from './index.css';
import Footer from '@/components/Footer'
function BasicLayout(props) {
  const path=['/','/my','/order']
  const pathName=props.location.pathname
  const isShow=!path.includes(pathName)
  const FooterProps={
    pathName,
    isShow
  }
  return (
    <div>
      <Footer {...FooterProps}/>
      {props.children}
    </div>
  );
}

export default BasicLayout;
