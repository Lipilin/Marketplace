'use client';
import { ReviewForm } from "./reviewForm";
import { ReviewList } from "./reviewList";
import { useState } from 'react';

export function ReviewContainer({reviews}: {reviews: Review[]}){
    const [activeTab, setActiveTab] = useState<'list' | 'form'>('list');
    const handleTabChange = (tab: 'list' | 'form') => {
        setActiveTab(tab);
    };
    const isListActive = activeTab === 'list' ? 'active' : '';
    const isFormActive = activeTab === 'form' ? 'active' : '';
    return (
        <>
            <div className = "reviews-title">
                Отзывы о Marketplace
            </div>
            <div className = "reviews-container-header">
                <div className = { isListActive } onClick={() => handleTabChange('list')}>
                    Отзывы
                    <div className = "reviews-container-header-line"></div>
                </div>
                <div className = { isFormActive } onClick={() => handleTabChange('form')}>
                    Оставить отклик
                    <div className = "reviews-container-header-line"></div>
                </div>
            </div>
            <div className = { `reviews-item ${isListActive}` }>
                <ReviewList reviews={reviews} />
            </div>
            <div className = { `reviews-item ${isFormActive}` }>
                <ReviewForm />
            </div>
        </>
    )
}