import React from 'react';

const InformeRadiologico = ({ hallazgos, diagnostico, impresiones }) => {
  return (
    <div className="informe-container">
      <h2>Informe Radiológico</h2>
      <p><strong>Hallazgos:</strong> {hallazgos}</p>
      <p><strong>Diagnóstico:</strong> {diagnostico}</p>
      <p><strong>Impresiones:</strong> {impresiones}</p>
    </div>
  );
};

export default InformeRadiologico;
