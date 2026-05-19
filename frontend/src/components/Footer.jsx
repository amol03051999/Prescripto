import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="md:mx-10">

      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/* left section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="logo" />

          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>

        {/* center section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>

          <ul className="flex flex-col gap-2 text-gray-600">

            <li
              className="cursor-pointer"
              onClick={() => handleNavigation("/")}
            >
              Home
            </li>

            <li
              className="cursor-pointer"
              onClick={() => handleNavigation("/about")}
            >
              About us
            </li>

            <li
              className="cursor-pointer"
              onClick={() => handleNavigation("/contact")}
            >
              Contact us
            </li>

          </ul>
        </div>

        {/* right section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>

          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-123-456-7890</li>
            <li>amoldev@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />

        <p className="py-5 text-sm text-center">
          Copyright 2025 @ Prescripto - All Rights Reserved.
        </p>
      </div>

    </div>
  );
};

export default Footer;
