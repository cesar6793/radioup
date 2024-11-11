"use client";

import React, { useState } from 'react';

interface DashboardMedicoProps {
  imageUrl: string | null;
  report: string | null;
}

const DashboardMedico: React.FC<DashboardMedicoProps> = ({ imageUrl,report }) => {
  const [comments, setComments] = useState<string>('');

  const handleCommentsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComments(event.target.value);
  };

  if (!imageUrl || !report ) {
    return null;
  }


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>.</h2>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
        <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '500px', marginRight: '20px' }} />
        <div style={{ flex: 1 }}>
          <h3>Informe Radiológico</h3>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{report}</pre>
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
