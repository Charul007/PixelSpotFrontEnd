
import { useState } from 'react'
import './App.css'
import Header from '../src/components/Common/Header'
import Sidebar from '../src/components/Common/Sidebar'
import Home from "./components/AdminPanel/Dashboard";


function MainRender() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
} 

export default MainRender;
