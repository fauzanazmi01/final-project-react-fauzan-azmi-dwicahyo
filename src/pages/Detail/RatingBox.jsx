import React from 'react'
import Star from './Star';

export default function RatingBox({ rating, votes }) {
    const floatRating = parseFloat(rating);
    let containerClass = '';

    if (floatRating >= 7.8) {
        containerClass = 'text-bg-success';
    } else if (floatRating >= 5) {
        containerClass = 'text-bg-warning'; // TODO fix star on yellow bg
    } else {
        containerClass = 'text-bg-danger';
    }

    return (
        <div className={`col-4 col-lg-3 p-3 rounded ${containerClass}`}>
            <h3 className='m-0'>Rating</h3>
                <div>
                    <Star/>
                    <span className='fs-1 fw-bold'>{rating}</span> / 10
                </div>
            <div style={{ fontSize: '0.75em' }}>
                Rated by {votes} users
            </div>
        </div>
    )
}
