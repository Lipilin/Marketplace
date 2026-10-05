export default interface BaseRepository<T>{
    table: string;
    findAll(): Promise<T[]>;
    find(clause: Record<string, any>): Promise<T | null>;
    findOrFall(): Promise<T>;
}