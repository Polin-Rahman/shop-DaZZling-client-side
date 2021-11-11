import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('New product added Successfully');
                    reset();
                }
            })
    }

    return (
        <div className="container addProductContainer">
            <h3 className="text-center my-5 fst-italic">Add a new product</h3>

            <div className="d-flex justify-content-center">
                <div>
                    <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                        <p className="mb-1"><small>New product name:</small></p>

                        <input placeholder="Product Name" defaultValue="" {...register("name", { required: true })} />

                        <p className="mb-1"><small>Price:</small></p>

                        <input placeholder="Price" defaultValue="" {...register("price", { required: true })} />

                        <p className="mb-1"><small>Add image url:</small></p>

                        <input placeholder="Image URL" defaultValue="" {...register("img", { required: true })} />

                        <p className="mb-1"><small>Add detail:</small></p>

                        <input placeholder="Detail" defaultValue="" {...register("detail", { required: true })} />

                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;