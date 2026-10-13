'use client';
import { useForm } from "react-hook-form";
import { useCallback, useTransition } from "react";
import { createReviewAction } from "../actions/postAction";
import { useRouter } from "next/navigation";

const STAR_GRAY = "/star-gray.svg";
const STAR_FILLED = "/star-filled.svg";

export function ReviewForm(){
    const {register, handleSubmit, formState: {errors}, setValue, watch} = useForm<ReviewFormData>();
    const rating = watch('rating') ?? 0;
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const onSubmit = useCallback((data: ReviewFormData) => {
        startTransition(async () => {
            const formData: FormData = new FormData();
            formData.append('userName', data.userName);
            formData.append('title', data.title);
            formData.append('comment', data.comment);
            formData.append('rating', data.rating.toString());
            const result = await createReviewAction(formData);
            if(result.status === 'success'){
                router.refresh();
            }else{
                alert(result.message);
            }
        })
    }, [router]);
    return (
        <>
            <div className="reviews-form-container">
                <div className="reviews-form-title">Оставить отзыв</div>
                <form className="reviews-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="reviews-form-item-input">
                        <input type = "text" {...register('userName')} />
                        <label htmlFor="userName">Имя</label>
                    </div>
                    <div className="reviews-form-item-input">
                        <input type = "text" {...register('title')} />
                        <label htmlFor="title">Заголовок</label>
                    </div>
                    <div className="reviews-form-item-input">
                        <input type = "text" {...register('comment')} />
                        <label htmlFor="comment">Отзыв</label>
                    </div>
                    <div className = "reviews-form-item-stars">
                        <label htmlFor="rating">Рейтинг</label> 
                        <ul className="reviews-stars">
                            {Array.from({ length: 5 }, (_, index) => {
                                const value = (index + 1) as ReviewRating;
                                const filled = value <= rating;
                                return (
                                    <li key={index}>
                                        <button
                                            type="button"
                                            className="reviews-star-button"
                                            onClick={() => setValue('rating', value, { shouldValidate: true })}
                                            aria-label={`${value} из 5`}
                                        >
                                            <img
                                                src={filled ? STAR_FILLED : STAR_GRAY}
                                                alt=""
                                                width={32}
                                                height={32}
                                            />
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <input type = "hidden" placeholder="Рейтинг" {...register('rating')} />
                    <button className="reviews-form-button" type="submit">Отправить</button>
                </form>
                <div className="reviews-form-error">
                    { errors.title && <p>{errors.title.message}</p> }
                </div>
            </div>
        </>
    )
}