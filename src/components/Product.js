import React from 'react'
import Productdetail from './Productdetail'

function Product() {
  return (
   
      <div className="container py-5">
        <div className="row">
            <Productdetail name="iphone" price="120000"image="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=329&q=80" />
            
            <Productdetail name="Samsung" price="130000" image="https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>

            <Productdetail name="Oneplus" price="80000" image="https://images.unsplash.com/photo-1580521923679-6d275830d039?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />

            <Productdetail name="Mi" price="60000" image="https://images.unsplash.com/photo-1624434207284-727cf0e6ea8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
        </div>
      </div>
    
  )
}

export default Product
