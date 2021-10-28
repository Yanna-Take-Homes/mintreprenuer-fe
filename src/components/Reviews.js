import React from "react";
import styled from 'styled-components';

export const starIconsWrapper = styled.div`{}`;

export const AvgReviewWrapper = styled.div`{}`;

export const NewReviewWrapper = styled.div`{}`;

export const RatingSelection = () => {
    return (
        <div className="review-visual-ctn">
            <i id="star-0" className="rating-star fal fa-star"/>
            <i id="star-1" className="rating-star fal fa-star"/>
            <i id="star-2" className="rating-star fal fa-star"/>
            <i id="star-3" className="rating-star fal fa-star"/>
            <i id="star-4" className="rating-star fal fa-star"/>
        </div>
    );
}

export const TextArea = () => {
    return (
        <div>
            <textarea
                id="review-input"
                placeholder="Start typing..."
            />
            <button id="submit-review-btn">Submit Review</button>
        </div>
    );
}
