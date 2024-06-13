"use client";

import React, { useState } from 'react';

interface DashboardMedicoProps {
  imageUrl: string | null;
}

const DashboardMedico: React.FC<DashboardMedicoProps> = ({ imageUrl }) => {
  const [comments, setComments] = useState<string>('');

  const handleCommentsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComments(event.target.value);
  };

  if (!imageUrl) {
    return null;
  }

  const radiologicalReport = `
    Informe Radiológico:

    Paciente: Juan Pérez
    Fecha del Estudio: 12 de junio de 2024
    Modalidad: Radiografía de Tórax

    Hallazgos:
    - Pulmones: Volúmenes pulmonares dentro de los límites normales. No se observan infiltrados, consolidaciones
      ni masas.
    - Corazón: Tamaño y silueta cardíaca normales.
    - Mediastino: No se observan adenopatías ni masas mediastínicas.
    - Diafragma: Contornos diafragmáticos normales.
    - Pleura: No se observa derrame pleural ni neumotórax.

    Impresión:
    - Radiografía de tórax normal. No se identifican hallazgos patológicos significativos.

    Recomendaciones:
    - Continuar con controles rutinarios según indicación médica.
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>.</h2>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
        <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '500px', marginRight: '20px' }} />
        <div style={{ flex: 1 }}>
          <h3>Informe Radiológico</h3>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{radiologicalReport}</pre>
        </div>
      </div>
      <div style={{ width: '100%', marginTop: '20px' }}>
        <h3>Recomendaciones / Comentarios</h3>
        <textarea
          value={comments}
          onChange={handleCommentsChange}
          placeholder="Escriba sus recomendaciones o comentarios aquí..."
          style={{ width: '100%', minHeight: '100px' }}
        />
      </div>
    </div>
  );
};

export default DashboardMedico;
