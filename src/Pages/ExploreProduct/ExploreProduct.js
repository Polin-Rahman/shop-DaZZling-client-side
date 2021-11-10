import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ExploreProduct = ({ product }) => {

    const { name, img, detail, price } = product;

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
                        <Button variant="outline-dark">Purchase Now</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ExploreProduct;