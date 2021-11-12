import React from 'react';
import Rating from 'react-rating';
import './ReviewSingle.css';

const Review = ({ review }) => {
    const { name, description, rating } = review;
    return (
        <div className="col">

            <div className="card text-center border-0">

                <div className="card-body">
                    <i className="fas fa-user-circle fs-1 text-secondary"></i>
                    <h6 className="card-title">{name}</h6>
                    <p className="card-text">{description}</p>
                    <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly>
                    </Rating>

                </div>

            </div>

        </div>
    );
};

export default Review;