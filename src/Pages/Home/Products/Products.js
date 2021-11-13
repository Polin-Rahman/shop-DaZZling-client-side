import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setISLoading] = useState(false);

    useEffect(() => {
        setISLoading(true);

        fetch('https://agile-escarpment-19572.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setISLoading(false);
                setProducts(data);
            })
    }, [])

    const sixProducts = products.slice(0, 6);
    // console.log(sixProducts);

    return (
        <div className="container" style={{ marginTop: '120px' }}>
            <h1 className="text-center fst-italic">Our Collections</h1>
            {
                isLoading &&
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" variant="secondary" />
                </div>
            }

            <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
                {
                    sixProducts.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>

            <div className="d-flex justify-content-center mt-5">
                <Link to="/exploreProducts">
                    <button className="btn btn-dark">Explore More</button>
                </Link>
            </div>
        </div >
    );
};

export default Products;