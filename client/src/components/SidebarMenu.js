import React from 'react';
import '../styles.css';
import logo from './img/logo-kyodo-branca.png';  // Importando a imagem
import MenuCalculadoras from './MenuCalculadoras';  // Importe o componente

function SidebarMenu({ onSelection }) {
  
  const handleClick = (selected) => {
    onSelection(selected);
  }
  // Receba onSelection como uma prop
  return (
    <div className="sidebar-menu">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <MenuCalculadoras onSelection={onSelection} />  {/* Renderize o componente de menu aqui */}
    </div>
  );
}

export default SidebarMenu;
