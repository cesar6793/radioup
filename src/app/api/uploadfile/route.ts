import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  try {
    const reader = req.body?.getReader();
    if (!reader) throw new Error('ReadableStream not supported');

    let receivedLength = 0;
    const chunks: Uint8Array[] = [];

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) {
        chunks.push(value);
        receivedLength += value.length;
      }
    }

    const data = new Uint8Array(receivedLength);
    let position = 0;
    for (const chunk of chunks) {
      data.set(chunk, position);
      position += chunk.length;
    }

    const filename = `file-${Date.now()}.png`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    console.log(`Saving file to: ${uploadDir}`);

    await fs.promises.mkdir(uploadDir, { recursive: true });
    const uploadPath = path.join(uploadDir, filename);

    await fs.promises.writeFile(uploadPath, data);
    console.log(`File saved: ${uploadPath}`);

    return NextResponse.json({ url: `/uploads/${filename}` }, { status: 200 });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Error uploading file' }, { status: 500 });
  }
}

