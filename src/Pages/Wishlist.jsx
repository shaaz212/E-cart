import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromWishlist } from '../redux/wishlistSlice'
import { addToCart } from '../redux/cartSlice'


function Wishlist() {

  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()

  // add to cart from wishlist
  const addToCartFromWishlist = (products)=>{
    dispatch(addToCart(products))
    dispatch(deleteFromWishlist(products.id))
  }


  return (
    <div style={{marginTop:'150px'}}>
      <Row className='mb-2 ms-5'>
        {
          wishlistArray.length>0?
          wishlistArray.map((products,index)=>(
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
                    <Button onClick={()=>dispatch(deleteFromWishlist(products.id))}  className='btn border border rounded me-4' style={{height:'3rem'}}><i className='fa-solid fa-trash  fa-lg'></i></Button>
                    <Button onClick={()=>addToCartFromWishlist(products)} className='btn border rounded' style={{height:'3rem'}}><i className='fa-solid fa-cart-plus fa-lg'></i></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )):""
        }
      </Row>
    </div>
  )
}

export default Wishlist