import { z } from 'zod';

export const createCommentSchema = z.object({
    name: z.string().min(2).max(100),
    title: z.string().min(2).max(100),
    comment: z.string().min(2).max(1000),
    rating: z.number().min(1, {message: 'Рейтинг должен быть от 1 до 5 звёзд'}).max(5, {message: 'Рейтинг должен быть от 1 до 5 звёзд'}),
})