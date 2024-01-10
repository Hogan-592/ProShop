import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

function HomeScreen() {
  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {/* Mapping through every product */}
            {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                {/* This is how the bootstrap works, on a small screen, it will be stack taking 12 column spaces
                on a medium screen, each one will take uop 6
                on a large scrren , each one will take up 4
                on an extra large screen, each one will take up 3
                  */}
                  <Product product={product} />
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen