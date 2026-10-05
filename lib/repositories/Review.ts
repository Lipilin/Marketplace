import BaseRepository from "@/types/Database/BaseRepository";
import Review from "@/types/Reviews/Review";
import Driver from "@/types/Database/Driver";

export class ReviewRepository implements BaseRepository<Review>{

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
}

