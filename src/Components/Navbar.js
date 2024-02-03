import React from 'react'
import icon from './icon.gif';

export default function Navbar({navbarColor}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:navbarColor}}>
    <div className="container-fluid">
        <img src={icon} alt="logo" />
     
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Menu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"style={{fontWeight:"bold"}}>Location</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"style={{fontWeight:"bold"}}>Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"style={{fontWeight:"bold"}}>About Us</a>
          </li>
        </ul>
          <button className="btn btn-danger"style={{}} type="submit">Login</button>
       
      </div>
    </div>
  </nav>
  )
}
