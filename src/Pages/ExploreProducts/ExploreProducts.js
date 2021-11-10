import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ExploreProduct from '../ExploreProduct/ExploreProduct';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const ExploreProducts = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setISLoading] = useState(false);

    useEffect(() => {
        setISLoading(true);

        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setISLoading(false);
                setProducts(data);
            })
    }, [])
    return (
        <div>
            <NavigationBar></NavigationBar>
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
                        products.map(product => <ExploreProduct
                            product={product}
                        ></ExploreProduct>)
                    }
                </div>
            </div>
        </div >

    );
};

export default ExploreProducts;