'use client';

import formatDate from "@/lib/utils/formatDate";

const STAR_FILLED = "/star-filled.svg";
const STAR_GRAY = "/star-gray.svg";
const MAX_RATING = 5;

export function ReviewList({ reviews }: { reviews: Review[] }){
    return (
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
                                    <img src={STAR_FILLED} alt="" width={20} height={20} key={i} />
                                ))
                            }
                            {
                                Array.from({ length: MAX_RATING - review.rating }, (_, i) => (
                                    <img src={STAR_GRAY} alt="" width={20} height={20} key={i} />
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
    )
}