import React from 'react'
import Logo from '../Assets/Evolve_logo.png'

export default function Navbar() {
  return (
    <div>
           <nav className="navbar navbar-expand-lg white-navbar">
           <div className="container-fluid">
           {/* <a className="navbar-brand" 
           style={{
              marginLeft:'20px',
              marginTop:'20px'
           }}
           href="#">
            <img src={Logo} alt="Logo"  height="60" width="230"/>
           </a> */}
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item"> 
          <a className="nav-link " aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#">Our Activities</a>
          </li>
         <li className="nav-item ">
          <a className="nav-link " href="#">Join Us </a>
        </li>
         <li className="nav-item ">
          <a className="nav-link " href="#">About Us </a>
        </li>
         <li className="nav-item ">
          <a className="nav-link " href="#">Contact Us </a>
        </li>
       
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>





    </div>
  )
}
