import React from 'react'

function Productdetail(props) {
    const {name ,price,image} = props
  return (
    <>
       <div className="card m-auto" style={{width: '20rem',}}>
  <img src={image} className="card-img-top" alt="..." style={{height:"200px", width:"300px", objectfit:"cover"}}/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <h4>Price:{price}</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">View More</a>
  </div>
</div>

      
    </>
  )
}

export default Productdetail
