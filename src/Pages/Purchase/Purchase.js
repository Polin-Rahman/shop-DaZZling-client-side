import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import './Purchase.css';

const Purchase = () => {

    const { id } = useParams();
    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://agile-escarpment-19572.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                reset(data);
            });
    }, [reset, id])

    const onSubmit = data => {
        //console.log(data)
        delete data._id;

        fetch('https://agile-escarpment-19572.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Booking processed Successfully');
                    reset();
                }
            })
    };

    const status = 'Pending';

    return (
        <div>
            <NavigationBar></NavigationBar>

            <div className="container my-5 order">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h2 className="text-center fst-italic mb-5">Your selecting product</h2>

                        <div className="card border-0 mb-3" style={{ 'max-width': '540px' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={product.img} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.detail}</p>
                                        <h6>Price: $ {product.price}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-6 col-sm-12">

                        <div className="d-flex justify-content-center">

                            <form className="order-form" onSubmit={handleSubmit(onSubmit)}>

                                <p className="mb-1"><small>Booking for:</small></p>
                                <input readOnly defaultValue={product.name} {...register("name")} />

                                <p className="mb-1"><small>Your total Cost:</small></p>
                                <input readOnly defaultValue={product.price} {...register("price")} />

                                <p className="mb-1"><small>Order status:</small></p>
                                <input readOnly defaultValue={status} {...register("status")} />

                                <p className="mb-1"><small>Your informations:</small></p>
                                <input readOnly defaultValue={user.displayName} {...register("userName")} />

                                <input readOnly defaultValue={user.email} {...register("email", { required: true })} />
                                {errors.email && <span className="error">This field is required</span>}

                                <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />

                                <input placeholder="Phone number" defaultValue="" {...register("phone", { required: true })} />

                                <input type="submit" />
                            </form>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;