// utils/fileUpload.ts
import { writeFile } from 'fs/promises';

export async function saveFile(file: File): Promise<string> {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = `/tmp/${file.name}`;
    await writeFile(path, buffer);
    return path;
}
