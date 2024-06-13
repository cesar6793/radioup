import React from 'react';

const Recomendaciones = ({ onChange, value }) => {
  return (
    <div className="recomendaciones-container">
      <h2>Recomendaciones para el Paciente</h2>
      <textarea
        rows="4"
        cols="50"
        value={value}
        onChange={onChange}
        placeholder="Escribe aquí las recomendaciones..."
      />
    </div>
  );
};

export default Recomendaciones;
