import React from "react";
import "./Footer.css";
import Title from "../../atoms/Title/Title";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <Title titleText={"This is a Footer"} />
      <div className="links">
        <Link to="" className="link">
          Home Page
        </Link>
        <Link to="about" className="link">
          About Page
        </Link>
        <Link to="theodo" className="link">
          Theodo Page
        </Link>
      </div>
    </div>
  );
}
