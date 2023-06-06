import "./Header.scss";

import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { getProfile, logout } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";

import banteng from "../../assets/banteng.png";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Posts",
    path: "/posts",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
  {
    display: "Login",
    path: "/login",
  },
  {
    display: "Register",
    path: "/register",
  },
];

const Header = () => {
  const { isLoggedIn, token } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    if (isLoggedIn && token) {
      dispatch(getProfile());
    }
  }, [dispatch, isLoggedIn, token]);
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={banteng} alt="" />
          <Link to="/">Movie List</Link>
        </div>
        <ul className="header__nav">
          {isLoggedIn ? (
            <li className={`${active === 3 ? "active" : ""}`}>
              <Link to="/movie">Movies</Link>
              <span className="nav-separator"></span>
              <Link to="/tv">TV Series</Link>
              <span className="nav-separator"></span>
              <Link to="/" onClick={() => dispatch(logout(navigate))}>
                logOut
              </Link>
            </li>
          ) : (
            headerNav.map((e, i) => (
              <li key={i} className={`${i === active ? "active" : ""}`}>
                <Link to={e.path}>{e.display}</Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
