import React from 'react'

import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav1 sticky-top">
  <a className="navbar-brand nav1" href="#">CYBER SOCIETY</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <i class="fa-sharp fa-solid fa-bars-sort"></i>
  </button>

  <div className="collapse navbar-collapse menu1" id="navbarSupportedContent">
  
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Team</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
    </ul>
    <form class="form-inline">
    <input class="form-control mr-sm-2 nav1" type="search" placeholder="Search" aria-label="Search" />
    <button class="btn btn-outline-white my-2 my-sm-0" type="submit">Search</button>
  </form>
  </div>
</nav>
    
    
    
    </>
  )
}

export default Navbar
