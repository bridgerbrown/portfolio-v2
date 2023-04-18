import React from "react";
import Image from "next/image";

const Sidebar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";

  return (
    <>
        <nav className="sidebar-container">
            <button onClick={props.toggleSidebar} className="sidebar-toggle">
            ☰
            </button>
            <div className={sidebarClass}>
                <a href="#bio" onClick={props.toggleSidebar}>
                    About
                </a>
                <a href="#projects" onClick={props.toggleSidebar}>
                    Projects
                </a>
                <a href="#design" onClick={props.toggleSidebar}>
                    Design
                </a>
                <a href="#contact" onClick={props.toggleSidebar}>
                    Contact
                </a>
            </div>
        </nav>
    </>
  );
};
export default Sidebar;