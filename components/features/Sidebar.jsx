import React from "react";
import Image from "next/image";

const Sidebar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";

  return (
    <>
        <nav className="Sidebar-container">
            <button onClick={props.toggleSidebar} className="sidebar-toggle">
            ☰
            </button>
            <div className={sidebarClass}>
                <a href="#bio">
                    About
                </a>
                <a href="#projects">
                    Projects
                </a>
                <a href="#contact">
                    Contact
                </a>
            </div>
        </nav>
    </>
  );
};
export default Sidebar;