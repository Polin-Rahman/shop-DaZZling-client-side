import React, { useEffect, useState } from 'react';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    // delete order
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to Delet?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = products.filter(user => user._id !== id);
                        setProducts(remaining);
                    }
                });
        }
    }

    return (
        <div className="container my-5">
            <h3 className="text-center fst-italic mb-5">Total Products: {products.length}</h3>

            <div className="row">

                {
                    products.map(product => (
                        <div className="col-sm-6">

                            <div className="card mb-3" style={{ 'max-width': '540px' }}>
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src={product.img} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.detail}</p>
                                            <h6>Price: $ {product.price}</h6>
                                            <button onClick={() => handleDelete(product._id)} className="btn btn-outline-danger btn-sm">Remove this Product</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default ManageProducts;