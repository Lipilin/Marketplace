export default interface DatabaseDriver{
    read<T>(table: string): Promise<T[]>;
}