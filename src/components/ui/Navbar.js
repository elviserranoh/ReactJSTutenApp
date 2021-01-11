import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../duck/user";
import "./navbar.css";

export const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav className="navbar px-4 align-items-center flex-row bg-white">
      <Link to="/" className="navbar-brand text-black-50 fw-bold">
        TutenApp
      </Link>
      <div className="d-flex flex-row justify-content-center">
        <i className="icon-account"></i>
        <p className="mx-2" style={{ margin: 0 }}>
          {`${auth.firstName} ${auth.lastName}`}
        </p>
        <i
          onClick={handleLogout}
          className="fas fa-sign-out-alt d-flex align-items-center ml-1 cursor-pointer"
        ></i>
      </div>
    </nav>
  );
};
