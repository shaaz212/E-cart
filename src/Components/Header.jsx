import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {

    const wishlist = useSelector((state)=>state.wishlistReducer)
    const cart = useSelector((state)=>state.cartReducer)

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light w-100 top-0" style={{background:'#000',zIndex:'1',position:'fixed'}}>
                <div className="container px-4 px-lg-5">
                    <Link className='fs-3 mt-2 mb-2' to={'/'} style={{textDecoration:'none'}}><i className="fa-solid fa-hat-wizard fa-bounce fa-xl" style={{color:'#7E354D'}}></i><span className='ms-1 fw-bold' style={{color:'#fff'}}>E-Cart</span></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        </ul>
                        <form className="d-flex">
                            <Link className='btn border rounded text-light' to={'/wishlist'} variant="outline-light">
                                <i className="fa-solid fa-heart"></i>
                                    <span className='ms-1 fw-semibold'>Wish List</span>
                                <span className="badge bg-light ms-3 rounded-pill fw-bold" style={{color:'#000'}}>{wishlist.length}</span>
                            </Link>
                            <Link className='btn border rounded text-light ms-5' to={'/cart'}>
                                <i class="fa-solid fa-cart-shopping"></i>
                                    <span className='ms-1 fw-semibold'>Cart</span>
                                <span className="badge bg-light ms-3 rounded-pill fw-bold" style={{color:'#000'}}>{cart.length}</span>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
    </>
  )
}

export default Header