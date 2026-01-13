import React, { useState } from 'react' ;
import {Link} from 'react-router-dom' ;

function Navbar() {

  let [activeLink , setActiveLink] = useState(" ") ;
 

  return (
    <>
  <nav className="navbar  navbar-expand-lg bg-body-tertiary fixed-top border-bottom">
  <div className="container-fluid">
    <Link className="navbar-brand h-100" to="/">
      <img style={{width:"auto" , height:"70px"}} src="/PerfectRoomly.svg" alt="Navbar_image" />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
      aria-label="Toggle navigation"
    >
    <span className="navbar-toggler-icon" />
    </button>
    <div
      className="offcanvas offcanvas-end "
      tabIndex={-1}
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
         <img style={{width:"auto" , height:"70px"}} src="/PerfectRoomly.svg" alt="Navbar_image" />
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <form className="d-flex align-items-center" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>

        <ul className="navbar-nav justify-content-end align-items-lg-center gap-md-3 gap-lg-5  flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className={`nav-link ${activeLink==="about" ? "active text-primary":""} mt-sm-3 mt-md-3 mt-lg-0`} aria-current="page" to="/about" onClick={()=>setActiveLink("about")}>
             About
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${activeLink==="services" ? "active text-primary":""} `}  to="/services" onClick={()=>setActiveLink("services")}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${activeLink==="createListing" ? "active text-primary":""} `} to="/createListing" onClick={()=>setActiveLink("createListing")}>
              CreateListing
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${activeLink==="login" ? "active text-primary":""} `} to="/login" onClick={()=>setActiveLink("login")} >
              SignUp/Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/avatar" >
              <i class="bi bi-person-circle fs-1 text-primary d-none d-lg-block"></i>
              <span className={`d-lg-none ${activeLink==="avatar" ? "active text-primary":""}`} onClick={()=>setActiveLink("avatar")}>Avatar</span>
            </Link>
          </li>
          
        </ul>
        
      </div>
    </div>
  </div>
</nav>

    </>
  );
}

export default Navbar;