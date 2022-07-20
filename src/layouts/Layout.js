import { Outlet } from 'react-router-dom';

import Navbar from './Navbar'
import BackgroundDark from './BackgroundDark';

function Layout() {
  return (
    <>
      {/* 導覽列 */}
      <Navbar />

      {/* 背景主題 */}
      <BackgroundDark />

      {/* Outlet相當於props.children，呈現區域頁面的內容 */}
      {/* 代表子頁區域內容 */}
      <Outlet />

    </>
  )
}
export default Layout;