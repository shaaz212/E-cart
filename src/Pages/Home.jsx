import React from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Home() {

  const data = useFetch("https:/dummyjson.com/products")
  console.log(data);

  const dispatch = useDispatch()

  return (
    <Row className='container-fluid  justify-content-center' style={{marginTop:'150px'}}>
        {
          data?.length>0?data?.map((products,index)=>(
            <Col key={index} className='mb-4' sm={12} md={6} lg={4} xl={3}>
              <Card className='ms-2 border border-dark rounded shadow' style={{ width: '18rem'}}>
                <Card.Img className='border  rounded-top border-dark' height={'200px'} variant="top" src={products?.thumbnail} />
                <Card.Body>
                  <Card.Title className='fw-bold'>{products?.title.slice(0,15)}...</Card.Title>
                  <Card.Text>
                    <p>{products?.description.slice(0,40)}...</p>
                    <p className='fw-bolder'>${products.price}/</p>
                  </Card.Text>
                  <div className='d-flex justify-content-evenly'>
                    <Button onClick={()=>dispatch(addToWishlist(products))}  className='btn border border rounded me-4' style={{height:'3rem'}}><i className='fa-solid fa-heart fa-lg'></i></Button>
                    <Button onClick={()=>dispatch(addToCart(products))} className='btn border rounded' style={{height:'3rem'}}><i className='fa-solid fa-cart-plus fa-lg'></i></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
          :""
        }
    </Row>
  )
}

export default Home