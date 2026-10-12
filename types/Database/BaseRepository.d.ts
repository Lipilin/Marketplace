import Driver from "./Driver";

export default interface BaseRepository<T>{
    table: string;
    findAll(): Promise<T[]>;
    find(clause: Record<string, any>): Promise<T | null>;
    findOrFall(): Promise<T>;
    create(data: T): Promise<void>;
}