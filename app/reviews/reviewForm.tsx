'use client';
import { useForm } from "react-hook-form";
import { useCallback, useTransition } from "react";
import { createReviewAction } from "../actions/postAction";

export function ReviewForm(){
    const {register, handleSubmit, formState: {errors}} = useForm<ReviewFormData>();
    const [isPending, startTransition] = useTransition();
    const onSubmit = useCallback((data: ReviewFormData) => {
        startTransition(async () => {
            const formData: FormData = new FormData();
            formData.append('userName', data.userName);
            formData.append('title', data.title);
            formData.append('comment', data.comment);
            formData.append('rating', data.rating.toString());
            const result = await createReviewAction(formData);
            console.log(result)
        })
    }, []);
    return (
        <>
            <div className="reviews-form-container">
                <div className="reviews-form-title">Оставить отзыв</div>
                <form className="reviews-form" onSubmit={handleSubmit(onSubmit)}>
                    <input type = "text" placeholder="Имя" {...register('userName')} />
                    <input type = "text" placeholder="Заголовок" {...register('title')} />
                    <input type = "text" placeholder="Отзыв" {...register('comment')} />
                    <input type = "number" placeholder="Рейтинг" {...register('rating')} />
                    <button className="reviews-form-button" type="submit">Отправить</button>
                </form>
                <div className="reviews-form-error">
                    { errors.title && <p>{errors.title.message}</p> }
                </div>
            </div>
        </>
    )
}