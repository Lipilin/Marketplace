export default interface Driver{
    read<T>(table: string): Promise<T[]>;
    write<T>(table: string, data: T): Promise<void>;
}