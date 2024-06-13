import React from 'react';
import './index.scss'; // Asegúrate de importar correctamente el archivo de estilos

const Boton = ({ texto, onClick }) => {
    return (
      <div className="contenedor">
        <button className="boton" onClick={onClick}>
          {texto}
        </button>
      </div>
    );
  };
  
  export default Boton;