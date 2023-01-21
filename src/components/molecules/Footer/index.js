import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <h1 className="h1"> U CAN'T C ME </h1>
      <div className="links">
        <Link to="" className="link">
          da main game ting
        </Link>
        <Link to="test" className="link">
          what u lookin 4?
        </Link>
        <Link to="theodo" className="link">
          is empty
        </Link>
      </div>
    </div>
  );
}
