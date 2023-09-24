import React from 'react'
import '../../style.css';
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Sidebar({openSidebarToggle, OpenSidebar}) {

    const history = useHistory();


  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                {/* <BsCart3  className='icon_header'/> */} Pixelspot
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>x</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a onClick={()=>{history.push('/admin');}}>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a onClick={()=>{history.push('/contactUs');}}>
                    <BsFillArchiveFill className='icon'/> Mails
                </a>
            </li>
            {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/>  
                </a>
            </li> */}
            <li className='sidebar-list-item'>
                <a  onClick={()=>{history.push('/adminAboutUs');}}>
                    <BsPeopleFill className='icon'/> About Us
                </a>
            </li>
            {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li> */}
            <li className='sidebar-list-item'>
                <a  onClick={()=>{history.push('/adminsetting');}}>
                    <BsFillGearFill className='icon'/> Edit
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar