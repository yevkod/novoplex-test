import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
    const jsonDirectory = path.join(process.cwd(), 'server');
    const fileContents = await fs.readFile(path.join(jsonDirectory, 'db.json'), 'utf8');
    const data = JSON.parse(fileContents);

    return NextResponse.json(data);
}
