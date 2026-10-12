import { z } from 'zod';

export const createCommentSchema = z.object({
    userName: z.string().min(2).max(100),
    title: z.string().min(2).max(100),
    comment: z.string().min(2).max(1000),
    rating: z.coerce.number().min(1, {message: 'Рейтинг должен быть от 1 до 5 звёзд'}).max(5, {message: 'Рейтинг должен быть от 1 до 5 звёзд'}),
})