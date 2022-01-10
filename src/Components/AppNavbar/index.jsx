import React from "react";
import { Link } from "react-router-link";

function AppNavbar() {
  return (
    <div className="d-flex">
      <div>Cushman & Wakefiel</div>
      <div>
        <Link to="/home">WAREHOUSES FOR LEASE</Link>
        <Link to="/home">NEWS</Link>
        <Link to="/home">PUBLIC AID CALCULATOR</Link>
        <Link to="/home">CONTACT</Link>
      </div>
    </div>
  );
}

export default AppNavbar;
