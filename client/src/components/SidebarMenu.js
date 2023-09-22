import React from 'react';

function SidebarMenu() {
  return (
    <div className="sidebar-menu">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <ul className="menu-items">
        <li><a href="#">Opção 1</a></li>
        <li><a href="#">Opção 2</a></li>
        <li><a href="#">Opção 3</a></li>
        {/* ... outras opções ... */}
      </ul>
    </div>
  );
}

export default SidebarMenu;
