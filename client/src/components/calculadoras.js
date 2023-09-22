// Calculadoras.js
import React, { useState } from 'react';
import MenuCalculadoras from './MenuCalculadoras';
import BarraRedonda from './BarraRedonda';
import BarraQuadrada from './BarraQuadrada';
// ... importe outros componentes

function Calculadoras() {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleSelection = (component) => {
        setSelectedComponent(component);
    };

    const renderSelectedComponent = () => {
        switch (selectedComponent) {
            case 'barraRedonda':
                return <BarraRedonda />;
            case 'barraQuadrada':
                return <BarraQuadrada />;
            case 'barraSextavada':
                return <BarraQuadrada />;
            case 'barraChata':
                return <BarraQuadrada />;
            case 'tuboRedondo':
                return <BarraQuadrada />;
            case 'chapa':
                return <BarraQuadrada />;

            default:
                return null;
        }
    };

    return (
        <div>
            <MenuCalculadoras onSelection={handleSelection} />
            {renderSelectedComponent()}
        </div>
    );
}

export default Calculadoras;
