'use server';

import { reviewRepository } from '@/lib/repositories';
import { createCommentSchema } from '@/lib/validation/createCommentSchema';
import { Logger } from '@/lib/utils/logger/logger';

export async function createReviewAction(formData: FormData): Promise<ActionState>{
    try{
        const data = Object.fromEntries(formData); 
        const { userName, title, comment, rating } = createCommentSchema.parse(data);
        const review: ReviewFormData = {
            userName: userName, 
            title: title, 
            comment: comment, 
            rating: rating as ReviewRating
        };
        await reviewRepository.create(review);
    }catch(error){
        Logger.error(`Пользователь отправил некорректные данные: ${ error }`);
        return {
            status: 'bad_request', 
            message: 'Отзыв содержит некорректные данные'
        }
    }

    return {
        status: 'success', 
        message: 'Спасибо за ваш отзыв!'
    }
}