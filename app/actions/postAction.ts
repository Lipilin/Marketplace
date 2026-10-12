'use server';

import { reviewRepository } from '@/lib/repositories';
import { createCommentSchema } from '@/lib/validation/createCommentSchema';
import { Logger } from '@/lib/utils/logger/logger';

export async function createReviewAction(formData: FormData): Promise<ActionState>{
    try{
        const { name, title, comment, rating } = createCommentSchema.parse(formData);
        const review: ReviewFormData = {
            userName: name, 
            title: title, 
            comment: comment, 
            rating: rating as ReviewRating
        };
        await reviewRepository.create(review);
    }catch(error){
        Logger.info(`Пользователь отправил некорректные данные: ${ error }`);
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