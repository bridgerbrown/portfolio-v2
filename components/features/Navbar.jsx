import React from 'react'
import Sidebar from './Sidebar'
import { useState } from 'react';
import Image from 'next/image';

function Navbar(props) {
    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
      setSideBarOpen(!sidebarOpen);
    };
    return(
    <>
        <nav className='Navs'>
            <div className='left-of-nav'>
                <div className='sidebar-heading'>
                    <Image 
                        src={'/sun-small.png'}
                        alt='switch to dark theme'
                        onClick={props.themeChange}
                        id='sidebar-switch-icon'
                        width="25"
                        height="25"
                    />
                </div>
            </div>
            <div className='Navbar'>
                <div className='navbar-items'>
                    <div className='navbar-list'>
                        <a href="#bio">
                            About
                        </a>

                        <a href="#projects">
                            Projects
                        </a>

                        <a href="#design">
                            Design
                        </a>

                        <a href="#contact">
                            Contact
                        </a>
                    </div>
                    <div className='Navbar-heading'>
                        {/* <Image 
                            src={'/moon-small.png'} 
                            alt='switch to dark theme'
                            onClick={props.themeChange}
                            id='theme-switch-icon'
                            width="25"
                            height="25"
                        /> */}
                    </div>
                </div>
            </div>
            <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} themeChange={props.themeChange}/>
        </nav>
    </>
    )
}  

export default Navbar