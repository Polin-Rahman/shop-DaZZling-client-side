import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setISLoading] = useState(false);

    useEffect(() => {
        setISLoading(true);

        fetch('./light-fake-data.json')
            .then(res => res.json())
            .then(data => {
                setISLoading(false);
                setProducts(data);
            })
    }, [])

    const sixProducts = products.slice(0, 6);
    // console.log(sixProducts);

    return (
        <div className="container my-5">
            <h1 className="text-center fst-italic">Explore all Exciting Collections</h1>
            {
                isLoading &&
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" variant="secondary" />
                </div>
            }

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                {
                    sixProducts.map(product => <Product
                        product={product}
                    ></Product>)
                }
            </div>
        </div >
    );
};

export default Products;