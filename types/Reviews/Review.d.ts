type ReviewRating = 1 | 2 | 3 | 4 | 5;

export default interface Review {
    id: number;
    title: string;
    userName: string;
    rating: ReviewRating;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}