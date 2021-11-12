import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { name, img, detail, price, _id } = product;

    return (
        <div className="col">
            <Card style={{ height: '540px' }}>
                <Card.Img variant="top" src={img} style={{ height: '250px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div style={{ height: '125px' }}>
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
    );
};

export default Product;