import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
    
    
     <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Support" className="nav-link" >Support</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link" >About</Link>
        </li>
        <li className="nav-item">
          <Link to="/Courses" className="nav-link" >Courses</Link>
        </li>
        <li className="nav-item">
          <Link to="/Coctail" className="nav-link" >Coctails</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</>
  )
}

export default Nav
