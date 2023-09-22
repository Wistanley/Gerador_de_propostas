import React, { useState } from 'react';
import SidebarMenu from './SidebarMenu';
import '../styles.css';  
import BarraRedonda from './calculadoras/BarraRedonda.js';
import BarraChata from './calculadoras/BarraChata';

function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSelection = (selected) => {
    setSelectedComponent(selected);
  }

  const renderComponent = () => {
    switch(selectedComponent) {
      case 'barraRedonda':
        return <BarraRedonda />;
      case 'barraChata':
        return <BarraChata />;
      // ... outros cases para diferentes componentes ...
      default:
        return null;
    }
  }

  return (
    <div className="dashboard-container">
      <SidebarMenu onSelection={handleSelection} />
      <div className="dashboard-content">
        <h1>GERADOR DE PROPOSTAS</h1>
        {renderComponent()}
      </div>
    </div>
  );
}

export default Dashboard;
