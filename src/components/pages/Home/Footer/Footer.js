import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center bg-green-400 py-5">
      Manufacturer Website &copy; 2022. All Rights Reserved
      <p>
        Developed By{" "}
        <Link to="/about-me" className="underline hover:no-underline">
          Md. Shakib Mia
        </Link>
      </p>
    </div>
  );
};

export default Footer;
