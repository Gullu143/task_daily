import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
        <Link to='/create' className="nav-link">Create</Link>
        </li>
        <li className="nav-item">
          <Link to='/login' className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
        <Link to='/register' className="nav-link">Sign Up</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}
