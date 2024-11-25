import React, { useState } from 'react'
import { female } from '../data/apise'

const Womens = () => {
  return (
    <div className='container'>
      <div className="row">
      {
        female.map((x)=>{
          return(
            <div className='col-md-4 col-lg-3 col-sm-6 col-12' key={x.id}>
<div className="card" style={{width: '100%'}}>
    <img src={x.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{x.title.slice(0,20)}</h5>
    <p className="card-text">{x.description.slice(0,50)}</p>
<div className='d-flex justify-content-between'>
<p>
  <span className='price' >Price: {x.price} $</span>


</p>   <p>
<span>Price: <strong>{x.discountprice}</strong> $</span>
</p>
</div>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


            </div>
          )
        })
      }
      
      </div>

    </div>
  )
}

export default Womens
