import React from 'react'
import { Card } from 'react-bootstrap'
import { Link, link } from 'react-router-dom'

const Product = ( { product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top" />
        </Link>

        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="h3">
            {/* Card.Text allows you to use any element you want. It can be div or heading or whatever */}
                ${product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product