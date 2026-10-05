import { readFile } from 'fs/promises';
import path from 'path';
import Driver from '@/types/Database/Driver';

export default class FileDriver implements Driver{

    async read<T>(table: string): Promise<T[]> {
        const filePath = path.join(process.cwd(), 'data', `${table}.json`);
        const file = await readFile(filePath, 'utf8');
        const parsedData = JSON.parse(file) as T[];
        return parsedData;
    }
}