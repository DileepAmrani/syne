import React, { useState } from "react";
import "./Navbar.css";
import navbarbrand from "../../images/navbarbrand.svg";
import profileiamge from "../../images/profile--2.png";
import { NavLink } from "react-router-dom";

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // var isActive = this.context.router.route.location.pathname === this.props.to;
  // var click = isActive ? 'active' : '';

  return (
    <nav className="navbar-head topnav ">
      <NavLink to="/" className="syne-logo">
        <img src={navbarbrand} alt="logo" className="syne-logo-image" />
      </NavLink>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu color-white"}>
        <NavLink to="/quotation" className="Nav__item__link">
          <li className="nav-item ">Quote</li>
        </NavLink>
        <NavLink to="/jobs" className="Nav__item__link">
          <li className="nav-item ">Jobs</li>
        </NavLink>
        <NavLink to="/invoice" className="Nav__item__link">
          <li className="nav-item ">Invoice</li>
        </NavLink>
        <NavLink to="/products" className="Nav__item__link">
          <li className="nav-item ">Product </li>
        </NavLink>
        <li class="nav-item color-white dropdown">
          <div className="dropdown">
            Database{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={15}
              height={15}
              className="fill-white"
              viewBox="0 0 448 512"
            >
              <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
            </svg>
            <div className="dropdown-content">
              <NavLink to="/companies">Companies</NavLink>
              <NavLink to="/contacts">Contacts</NavLink>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown color-white">
          <div className="dropdown">
            Configuration{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={15}
              height={15}
              className="fill-white"
              viewBox="0 0 448 512"
            >
              <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
            </svg>
            <div className="dropdown-content">
              <NavLink to="/quotationsettings">Quotation Settings</NavLink>
              <NavLink to="/quotationsettings">Jobs Settings</NavLink>
              <NavLink to="/quotationsettings">Invoice Settings</NavLink>
              <NavLink to="/productshowhidelistcolumns">Products</NavLink>
              <NavLink to="/databaseshowhidelistcolumns">Database</NavLink>
            </div>
          </div>
        </li>

        <li className="nav-item dropdown last-item mbs-0 color-white">
          <div className="dropdown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={15}
              height={15}
              className="fill-white"
              viewBox="0 0 448 512"
            >
              <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
            </svg>{" "}
            <i className="fas fa-cog fa-lg" />
            <div className="dropdown-content profile">
              <div className="d-flex">
                <div className="p-3 item">
                  <img
                    src={profileiamge}
                    alt="logo"
                    className="profileimage"
                  ></img>
                </div>
                <div className="p-3 item">
                  <h3 className="text-white">Usmandevteam</h3>
                  <p>Usmandevteams@gmail.com</p>
                </div>
              </div>
              <div className="p-3">
                <a href="/">Manage My Accounts</a>
                <a href="/usermanagement">Manage User Accounts</a>
                <a href="/yourinformation">Business Settings</a>
                <a href="/">
                  {" "}
                  <i class="fas fa-door-open"></i> Logout
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
