import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import * as CONSTS from "../../utils/consts";
// import Logo from "../../assets/IA.png"

const Navbar = (props) => {
  console.log(props)
  return (
    <nav>
      <Link to="/"><h1 className=" authLink text-sm  sm:text-4xl text-white">ARTMETH</h1></Link>
      <Link to="/gallery"><h3 className="text-sm  sm:text-4xl text-white">Gallery</h3></Link>
      <Link to="/artists"><h3 className="text-sm  sm:text-4xl text-white">Artists</h3></Link>
      <div className="nav__authLinks">
        {/* This will be the menu that the user will see when he start session */}
        {props.user ? (
          <>
            <Link to={"/user/profile"} className="authLink">
              {props.user.userName}
            </Link>
          
            <Link to={"/user/gallery"} className="authLink ml-4">
              My gallery
            </Link>

            <Link to={"/user/create-gallery"} className="authLink">
              Create a Gallery
            </Link>
            
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={"/auth/signup"} className="authLink">
              Signup
            </Link>
            <Link to={"/auth/login"} className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
