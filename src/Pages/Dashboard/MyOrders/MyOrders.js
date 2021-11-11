import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import DashboardNav from '../DashboardNav/DashboardNav';

const MyOrders = () => {

    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
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
        <>
            <DashboardNav></DashboardNav>
            <div className="container mb-5">
                <h2 className="text-center fst-italic my-5">Your have {orders.length} orders</h2>
                <div className="row">
                    {
                        orders.map(order => (

                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-header">
                                        <i className="fas fa-shopping-cart m-1 fs-4"></i>
                                        {order.status}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title fst-italic">{order.userName}</h5>

                                        <p className="card-text">Your Order: <span className="fw-bolder">{order.name}</span></p>

                                        <p className="card-text">Payable amount: <span className="fw-bolder">${order.price}</span></p>

                                        <h6 className="card-title fst-italic">Additional Informations:</h6>

                                        <p className="card-text">Email: {order.email}</p>
                                        <p className="card-text">Address: {order.address}</p>
                                        <p className="card-text">Phone: {order.phone}</p>

                                        <button onClick={() => handleDelete(order._id)} className="btn btn-danger">Cancel Order</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default MyOrders;