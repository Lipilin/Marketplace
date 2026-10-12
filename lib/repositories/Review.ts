import BaseRepository from "@/types/Database/BaseRepository";
import Driver from "@/types/Database/Driver";

export class ReviewRepository implements BaseRepository<Review | ReviewFormData>{

    table = 'reviews';

    constructor(private driver: Driver) {}

    async findAll(): Promise<Review[]> {
        const data = await this.driver.read<Review>(this.table);
        return data;
    }

    async find(clause: Record<string, any>): Promise<Review | null> {
        return Promise.resolve(null);
    }

    async findOrFall(): Promise<Review> {
        return Promise.resolve(null as unknown as Review);
    }

    async create(data: ReviewFormData): Promise<void>{
        const buf = new Uint32Array(2);
        crypto.getRandomValues(buf);
        const id = (buf[0] * 0x200000) + (buf[1] >>> 11);
        const review: Review = {
            ...data, 
            id : id,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        return await this.driver.write(this.table, review);
    }
}

