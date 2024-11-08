import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,  // Desactivamos el bodyParser porque vamos a manejar la carga de archivos manualmente
  },
};

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Creamos una promesa para manejar la carga del archivo
      const fileData = await new Promise<{ filePath: string }>((resolve, reject) => {
        let data = Buffer.alloc(0); // Aquí almacenaremos los datos del archivo

        // Leemos los datos del archivo del request
        req.on('data', chunk => {
          data = Buffer.concat([data, chunk]); // Concatenamos los trozos de datos
        });

        req.on('end', async () => {
          try {
            // Obtenemos el nombre del archivo (puedes ajustarlo según tu caso)
            const filename = `file-${Date.now()}.png`;
            const uploadDir = path.join(process.cwd(), 'public', 'uploads');

            // Verificamos que el directorio exista, si no, lo creamos
            await fs.promises.mkdir(uploadDir, { recursive: true });

            const uploadPath = path.join(uploadDir, filename);

            // Escribimos los datos en el sistema de archivos usando promesas
            await fs.promises.writeFile(uploadPath, data);
            resolve({ filePath: `/uploads/${filename}` });

          } catch (err) {
            reject('Error writing file to disk');
          }
        });

        req.on('error', (err) => {
          reject('Error processing file');
        });
      });

      // Enviamos la URL del archivo como respuesta
      return res.status(200).json({ url: fileData.filePath });
    } catch (error) {
      return res.status(500).json({ error: 'Error uploading file' });
    }
  } else {
    // Si no es un POST, respondemos con un método no permitido
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
