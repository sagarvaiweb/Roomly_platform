import { Link } from "react-router-dom";

function Footer() {
    return ( <>

<footer className="bg-primary text-white pt-5 pb-3 mt-5">
  <div className="container">
    <div className="row gy-4 mt-1">

      {/* Brand Section */}
      <div className="col-lg-4 col-md-6">
        <h5 className="fw-bold text-uppercase">Roomly</h5>
        <p className="small text-white-50">
          Roomly helps you find and list rooms easily with a smooth and secure
          booking experience.
        </p>
      </div>

      {/* Quick Links */}
      <div className="col-lg-2 col-md-6 d-none d-md-block d-lg-block">
        <h6 className="fw-semibold">Quick Links</h6>
        <ul className="list-unstyled">
          <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
          <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>
          <li><Link to="/services" className="text-white text-decoration-none">Services</Link></li>
          <li><Link to="/createListing" className="text-white text-decoration-none">Create Listing</Link></li>
        </ul>
      </div>

      {/* Account */}
      <div className="col-lg-2 col-md-6 d-none d-md-block d-lg-block">
        <h6 className="fw-semibold">Account</h6>
        <ul className="list-unstyled">
          <li><Link to="/login" className="text-white text-decoration-none">Sign Up / Login</Link></li>
          <li><Link to="/avatar" className="text-white text-decoration-none">Avatar</Link></li>
        </ul>
      </div>

      {/* Contact and Social icons */}
      <div className="col-lg-4 col-md-6">
        <h6 className="fw-semibold">Contact Us</h6>

        {/* Email & Phone */}
        <p className="mb-1 text-white-50">
          <i className="bi bi-envelope me-2"></i> support@roomly.com
        </p>
        <p className="text-white-50">
          <i className="bi bi-telephone me-2"></i> +977-98XXXXXXXX
        </p>

        {/* Social Icons */}
        <div className="d-flex gap-3 mt-2">
          <a href="#" className="text-white fs-4">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-white fs-4">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="text-white fs-4">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="text-white fs-4">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>

    </div>

    <hr className="border-light my-4" />

    {/* Bottom */}
    <div className="text-center text-white-50">
      &copy; {new Date().getFullYear()} Roomly. All rights reserved.
    </div>
  </div>
</footer>
    </> );
}

export default Footer;