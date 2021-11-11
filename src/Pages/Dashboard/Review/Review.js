import React from 'react';
import { useForm } from 'react-hook-form';
import './Review.css';

const Review = () => {

    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Review added Successfully');
                    reset();
                }
            })
    }

    return (
        <>
            <div className="container my-5 review-containar">
                <h3 className="text-center fst-italic">Please give your valuable review</h3>

                <div className="d-flex justify-content-center mt-5">

                    <form className="order-form" onSubmit={handleSubmit(onSubmit)}>

                        <input placeholder="Your Name" defaultValue="" {...register("name", { required: true })} />

                        <input placeholder="Description" defaultValue="" {...register("description", { required: true })} />

                        <div className="d-flex">
                            <p className="me-2 mt-3"><strong>Give Your Rating: </strong></p>

                            <select className="my-3 p-1" {...register("rating")}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        <input type="submit" />

                    </form>

                </div>

            </div>

        </>
    );
};

export default Review;