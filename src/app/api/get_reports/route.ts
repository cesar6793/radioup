// pages/api/get_report.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const getReportHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { image_url } = req.query;
  console.log(image_url)
  // Aquí puedes agregar la lógica para generar el informe basado en la URL de la imagen.
  // Este ejemplo devuelve un informe fijo como si fuera procesado por un sistema de análisis radiológico.
  if (!image_url) {
    return res.status(400).json({ error: 'Se necesita una URL de imagen' });
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
  
  return res.status(200).json({ report: radiologicalReport });
};

// export default getReportHandler;
