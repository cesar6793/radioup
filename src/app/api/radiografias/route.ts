import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

// Ruta donde se almacenan las radiografías
const uploadsDirectory = path.join(process.cwd(), 'public', 'uploads');

export async function GET(req: NextRequest) {
  try {
    // Leer los archivos en el directorio 'uploads'
    const files = fs.readdirSync(uploadsDirectory);

    // Filtrar solo los archivos de imágenes (por ejemplo, PNG y JPG)
    const images = files.filter(file => file.endsWith('.png') || file.endsWith('.jpg'));

    // Crear las URLs completas para cada imagen
    const imageUrls = images.map(file => `/uploads/${file}`);

    // Responder con las URLs de las imágenes
    return NextResponse.json(imageUrls, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'No se pudieron obtener las radiografías' }, { status: 500 });
  }
}
