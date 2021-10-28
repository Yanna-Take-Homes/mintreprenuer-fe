import React from "react";
import styled from 'styled-components';
import { RatingSelection, TextArea } from '../components/Reviews.js';
import { useLocation } from "react-router-dom";

const AddReviewPageCtn = styled.div`{
    height: 100vh;
    width: 100%;
}`

const AddReview = () => {

    const location = useLocation()
    const product = location.state.productClicked;

    return (
        <AddReviewPageCtn>
            <h1>{ product.title }</h1>
            <h2>What's your rating?</h2>
            <div>
                <h3>Rating</h3>
                <RatingSelection />
                <h3>Review</h3>
                <TextArea />
            </div>
        </AddReviewPageCtn>
    );
}


export default AddReview;

