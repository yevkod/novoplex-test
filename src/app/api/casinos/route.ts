import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
    try {
        const jsonDirectory = path.join(process.cwd(), 'src', 'server');
        const filePath = path.join(jsonDirectory, 'db.json');

        try {
            await fs.access(filePath);
        } catch (accessError) {
            return NextResponse.json({ error: 'File not found' }, { status: 404 });
        }

        const fileContents = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContents);

        const response = NextResponse.json(data);
        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

        return response;
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export function OPTIONS() {
    const response = new NextResponse(null, { status: 204 });
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    return response;
}
