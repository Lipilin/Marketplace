import { reviewRepository } from "@/lib/repositories";
import formatDate from "@/lib/utils/formatDate";
import StarIcon from "@/public/star-outline.svg";
import { ReviewForm } from "./reviewForm";

export default async function Reviews() {
    const reviews = await reviewRepository.findAll();
    return (
        <div className = "reviews-container">
            <div className = "reviews-title">
                Отзывы о Marketplace
            </div>
            <ul className = "reviews-list">
                {reviews.map((review) => (
                    <li className = "reviews-list-item" key={review.id}>
                        <div className = "reviews-list-item-header">
                            <div className = "reviews-list-item-title">
                                { review.title }
                            </div>
                            <div className = "reviews-list-item-rating">
                                {
                                    Array.from({ length: review.rating }, (_, i) => (
                                        <img src = { StarIcon.src } alt = "Star" key={i} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className = "reviews-list-item-content">
                            <div className = "reviews-list-item-comment">
                                { review.comment }
                            </div>
                            <div className = "reviews-list-item-date">
                                { formatDate(review.createdAt) }
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className = "review-create-suppose">
                <div className = "review-create-suppose-title">
                    Понравился Marketplace?
                </div>
                <div className = "review-create-suppose-description">
                    Оставьте свой отзыв и помогите другим пользователям сделать правильный выбор.
                </div>
                <button className = "review-create-suppose-button">
                    Оставить отзыв
                </button>
            </div>
        </div>
    )
}