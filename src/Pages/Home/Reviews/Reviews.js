import React, { useEffect, useState } from 'react';
import ReviewSingle from '../ReviewSingle/ReviewSingle';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])

    return (
        <div className="container" style={{ marginTop: '120px' }}>
            <h1 className="text-center fst-italic" >Customer Reviews</h1>

            <div className="row row-cols-2 row-cols-md-5 g-4 mt-5">

                {
                    reviews.map(review => <ReviewSingle
                        key={review._id}
                        review={review}
                    ></ReviewSingle>)
                }

            </div>
        </div>
    );
};

export default Reviews;