import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ExploreProduct = ({ product }) => {

    const { name, img, detail, price, _id } = product;

    return (
        <div>
            <div className="col">
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <div style={{ height: '9rem' }}>
                            <Card.Text>{detail}</Card.Text>
                        </div>
                        <Card.Text>
                            <strong>
                                Offer Price: ${price}
                            </strong>
                        </Card.Text>
                        <Link to={`/purchase/${_id}`}>
                            <Button variant="outline-dark">Purchase Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ExploreProduct;