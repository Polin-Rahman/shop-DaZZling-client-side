import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    const [update, setUpdate] = useState({});

    useEffect(() => {
        fetch('https://agile-escarpment-19572.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    //update
    const handleUpdate = id => {
        const updated = {
            status: 'Approved'
        }
        setUpdate(updated);
        const url = `https://agile-escarpment-19572.herokuapp.com/allOrders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Order status changed Successful');
                    window.location.reload();
                }
            })
    }

    // delete order
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel?');
        if (proceed) {
            const url = `https://agile-escarpment-19572.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = orders.filter(user => user._id !== id);
                        setOrders(remaining);
                    }
                });
        }
    }

    return (
        <div className="container my-5">
            <h3 className="text-center fst-italic mb-5">Total Order: {orders.length}</h3>

            <div className="row">
                {
                    orders.map(order => (

                        <div className="col-sm-6 col-md-4">
                            <div className="card mb-3">
                                <div className="card-header">
                                    <i className="fas fa-shopping-cart m-1"></i>
                                    <strong>{order.status}</strong>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title fst-italic">{order.userName}</h5>

                                    <p className="card-text">Your Order: <span className="fw-bolder">{order.name}</span></p>

                                    <p className="card-text">Payable amount: <span className="fw-bolder">${order.price}</span></p>

                                    <h6 className="card-title fst-italic">Additional Informations:</h6>

                                    <p className="card-text">Email: {order.email}</p>
                                    <p className="card-text">Address: {order.address}</p>
                                    <p className="card-text">Phone: {order.phone}</p>

                                    <button
                                        onClick={() => handleUpdate(order._id)}
                                        className="btn btn-outline-success me-2">Shipped Order</button>

                                    <button onClick={() => handleDelete(order._id)} className="btn btn-outline-danger">Cancel Order</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;