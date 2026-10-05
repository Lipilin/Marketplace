import { reviewRepository } from "@/lib/repositories";

export default async function Reviews() {
    const reviews = await reviewRepository.findAll();
    return (
        <div>
            <h1>Reviews</h1>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        {review.title}
                        {review.comment}
                        {review.rating}
                        {review.createdAt.toString()}
                        {review.updatedAt.toString()}
                    </li>
                ))}
            </ul>
        </div>
    )
}