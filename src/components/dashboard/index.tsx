import React, { useState } from 'react';
import Radiografia from '../radiografia';
import InformeRadiologico from '../informe';
import Recomendaciones from '../recomendaciones';

const DashboardMedico = () => {
  const [imageUrl, setImageUrl] = useState(null); // Estado para almacenar la URL de la imagen
  const [showDashboard, setShowDashboard] = useState(false); // Estado para mostrar/ocultar el dashboard

  const handleDrop = (acceptedFiles) => {
    // Manejar la imagen cargada desde el Dropzone
    if (acceptedFiles.length > 0) {
      setImageUrl(URL.createObjectURL(acceptedFiles[0]));
      setShowDashboard(true); // Mostrar el dashboard al cargar la imagen
    }
  };

  return (
    <div>
      {/* Mostrar la imagen de la radiografía */}
      {showDashboard && <Radiografia imageUrl={imageUrl} />}

      {/* Mostrar el informe radiológico */}
      {showDashboard && (
        <InformeRadiologico
          hallazgos="Hallazgos radiológicos aquí"
          diagnostico="Diagnóstico específico aquí"
          impresiones="Impresiones y recomendaciones aquí"
        />
      )}

      {/* Recuadro de texto para las recomendaciones */}
      {showDashboard && <Recomendaciones onChange={undefined} value={undefined} />}
      
      {/* Botón para activar el dashboard */}
      {!showDashboard && (
        <button onClick={() => setShowDashboard(true)}>Analizar</button>
      )}
    </div>
  );
};

export default DashboardMedico;
