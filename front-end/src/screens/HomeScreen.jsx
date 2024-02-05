import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from "../components/Loader";
import Message from '../components/Message';
import { useParams } from 'react-router-dom';
import Paginate from '../components/Paginate';
import { Link } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';


function HomeScreen() {
  const { pageNumber, keyword } = useParams();

  const {data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });
  // If you put something in the dependancy and that value changes, this use effect is going to run, but we only want it to run once when the page loads, so leave it empty.

  return (
    <>
        { !keyword ? <ProductCarousel /> : (<Link to='/' className='btn btn-light mb-4'>Go Back</Link> )}
        {isLoading ? (
          <Loader/>
        ) : error ? (<Message variant='danger'>{ error?.data?.message || error.error }</Message>) :
        (<>
          <h1>Latest Products</h1>
          <Row>
              {/* Mapping through every product */}
              {data.products.map((product) => (
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
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>) }
    </>
  );
};

export default HomeScreen