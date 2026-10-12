import { reviewRepository } from "@/lib/repositories";
import { ReviewContainer } from "./reviewContainer";


export default async function Reviews() {
    const reviews = await reviewRepository.findAll();
    return (
        <div className = "reviews">
            <ReviewContainer reviews={reviews} />
        </div>
    )
}