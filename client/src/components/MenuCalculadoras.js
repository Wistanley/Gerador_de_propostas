// MenuCalculadoras.js
import React from 'react';
function MenuCalculadoras({ onSelection }) {
  return (
    <ul>
      <li><a href="#" onClick={() => onSelection('barraRedonda')}>Barra Redonda</a></li>
      <li><a href="#" onClick={() => onSelection('barraChata')}>Barra Chata</a></li>
      <li><a href="#" onClick={() => onSelection('barraQuadrada')}>Barra Quadrada</a></li>
      <li><a href="#" onClick={() => onSelection('barraSextavada')}>Barra Sextavada</a></li>
      <li><a href="#" onClick={() => onSelection('chapa')}>Chapa</a></li>
      <li><a href="#" onClick={() => onSelection('tuboRedondo')}>Tubo Redondo</a></li>
      
    </ul>
  );
}
export default MenuCalculadoras;
