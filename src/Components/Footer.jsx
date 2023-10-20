import React from 'react'
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Footer() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center' style={{width:'100%',height:'300px',color:'#fff',backgroundColor:'#000'}}>
      <div className="footer d-flex  justify-content-evenly w-100">
        <div style={{width:'400px'}} className="website">
        <h4 className='mb-3'>
          <i className="fa-solid fa-hat-wizard fa-bounce fa-2xl" style={{color:'#7E354D'}}></i>
          <span className='fw-bold text-light'>E-Cart</span>
        </h4>
        <h6 className='text-light'>Designed and built with all the love in the world by the E-cart team with the help of our contributors</h6>
        <h6 className='text-light'>Code licensed MIT,docs CC BY 3.0</h6>
        <p className='text-light'>Currently v5.3.2</p>
        </div>
        <div className="links d-flex flex-column">
          <h3 className='text-light'>Links</h3>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
          <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
          <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wish List</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h3 className='text-light'>Guides</h3>
          <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
          <Link to={'https://www.w3schools.com/react/react_router.asp'} style={{textDecoration:'none',color:'white'}}>Routing</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h3 className='text-light'>Contact Us</h3>
          <div>
            <Form className='d-flex justify-content-evenly'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='border rounded' type="email" placeholder="Enter Your Email Id" />
              </Form.Group>
              <Button className='ms-2 border rounded' variant="primary" type="submit" style={{backgroundColor:"#fff",height:'3rem'}}>
                <i className="fa-solid fa-arrow-right" style={{color:'#000'}}></i>
              </Button>
            </Form>
          </div>
          <div className='fs-5'>
            <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-solid fa-envelope"></i></Link>
            <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-twitter"></i></Link>
            <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-linkedin"></i></Link>
            <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-instagram"></i></Link>
            <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-github"></i></Link>
            <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-facebook"></i></Link>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Footer