import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { Logger } from '@/lib/utils/logger/logger';

export default class FileDriver implements Driver{
    private readonly directory = path.join(process.cwd(), 'data');

    async read<T>(table: string): Promise<T[]> {
        try{
            const filePath = path.join(this.directory, `${table}.json`);
            const file = await readFile(filePath, 'utf8');
            const parsedData = JSON.parse(file) as T[];
            Logger.info(`Информация прочитана из ${filePath}`);
            return parsedData;
        }catch(error){
            Logger.error(`Ошибка при чтении информации: ${error}`);
            return [];
        }
    }

    async write<T>(table: string, data: T): Promise<void>{
        const filePath = path.join(this.directory, `${table}.json`);
        try{
            const rawData = await readFile(filePath, 'utf8');
            const parsedData = JSON.parse(rawData) as T[];
            parsedData.push(data);
            await writeFile(filePath, JSON.stringify(parsedData, null, 2));
            Logger.info(`Информация записана в ${filePath}`);
        }catch(error){
            Logger.error(`Ошибка при записи информации: ${error}`);
        }
    }
}