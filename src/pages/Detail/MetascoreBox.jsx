import React from 'react'
import Star from './Star';

export default function MetascoreBox({ rating }) {
    const floatRating = parseFloat(rating);
    let containerClass = '';

    if (floatRating >= 78) {
        containerClass = 'text-bg-success';
    } else if (floatRating >= 50) {
        containerClass = 'text-bg-warning'; // TODO fix star on yellow bg
    } else {
        containerClass = 'text-bg-danger';
    }

    return (
        <div className={`col-4 col-lg-3 p-3 rounded ${containerClass}`}>
            <h3 className='m-0'>Metascore</h3>
            <div>
                <Star/>
                <span className='fs-1 fw-bold'>{rating}</span> / 100
            </div>
        </div>
    )
}
