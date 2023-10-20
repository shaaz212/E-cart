import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, emptyCart } from '../redux/cartSlice'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Cart() {

  const navigate = useNavigate()

  const cartArray = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()

  const [ total,setTotal ] = useState(0)

  // total amount
  const totalAmount = ()=>{
    if (cartArray.length>0) {
      setTotal(cartArray.map(items=>items.price).reduce((p1,p2)=>p1+p2))
    } else {
      setTotal(0)
    }
  }

  useEffect(()=>{
    totalAmount()
  },[cartArray])

  const checkOut = ()=>{
    alert("Order has successfully placed")
    dispatch(emptyCart())
    navigate('/')
  }



  return (
    <div style={{marginTop:'150px'}}>
      {
        cartArray.length>0?
        <>
          <div className='row ms-5  me-2'>
            <div className='col-md-8'>
              <table className=' mt-5 table border border-secondary rounded p-5 table-hover'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartArray.map((products,index)=>(
                      <tr>
                        <td>{index+1}</td>
                        <td className='fw-bold'>{products.title}</td>
                        <td><img height={'100px'} width={'100px'} src={products.thumbnail} alt="" /></td>
                        <td>{products.price}</td>
                        <td><Button onClick={()=>dispatch(deleteFromCart(products.id))} className='btn bg-light border-light'><i className='fa-solid fa-trash text-danger fa-lg'></i></Button></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div className='col-md-1'>
            </div>
            <div className='col-lg-3 mt-5 border rounded border-secondary shadow' style={{height:'15%',marginLeft:'-3rem'}}>
              <h2 className='fw-bolder text-dark  mt-5'>Cart Summary</h2>
              <hr />
              <div className='ms-3 mt-3'>
                <h5>Total Products : <span>{cartArray.length}</span></h5>
                <h4 className='mb-4'>Total : $<span>{total}</span></h4>
                <div className='d-grid mt-5'>
                  <Button variant="outline-dark" onClick={()=>checkOut()} className='btn rounded mb-5'>Check Out</Button>
                </div>
              </div>
            </div>
          </div>
        </>:""
      }
    </div>
  )
}

export default Cart