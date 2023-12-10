import React, { useState } from 'react';
import logo from "../assets/flogo.jpg";
import FooterBG from "../assets/footer-black.jpg";
import { BsFacebook, BsPinterest, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <>
      <footer className="bg-cover bg-center" style={{ backgroundImage: `url(${FooterBG})` }}
    >
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0 w-48">
              <Link to="/" class="flex items-center mb-2">
                <img src={logo} class="h-[2.5] me-3 w-48" alt="FlowBite Logo" />
              </Link>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor amet consec, adip elit. Odit alias qui minus
                fugiat quos am dasdeng streng faskter. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem.
              </p>
            </div>

            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 ml-6">
              <div>
                  <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                    Usefull Links
                  </h2>
                <ul class="text-gray-400 font-medium text-sm">
                  <li class="mb-2">
                    <Link to="/Headphones" class="hover:underline">
                      Headphones
                    </Link>
                  </li>
                  <li class="mb-2">
                    <Link to="/gameconsole" class="hover:underline">
                      Game Console
                    </Link>
                  </li>
                  <li class="mb-2">
                    <Link to="/laptop" class="hover:underline">
                      Laptop
                    </Link>
                  </li>
                  <li class="mb-2">
                    <Link to="/mobiles" class="hover:underline">
                      Mobile
                    </Link>
                  </li>
                  <li>
                    <Link to="/watches" class="hover:underline">
                      Watches
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                    Quick Links
                  </h2>
                <ul class="text-gray-400 font-medium text-sm">
                  <li class="mb-2">
                    <Link to="/" class="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li class="mb-2">
                    <Link to="/blog" class="hover:underline">
                      Blog
                    </Link>
                  </li>
                  <li class="mb-2">
                    <Link to="/about" class="hover:underline">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" class="hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                  For Customers
                </h2>
                <ul class="text-gray-400 font-medium text-sm">
                  <li class="mb-2">
                    <Link
                      to="#"
                      class="hover:underline "
                    >
                      Order
                    </Link>
                  </li>
                  <li class="mb-2">
                    <Link
                      to="#"
                      class="hover:underline"
                    >
                      Account Details
                    </Link>
                  </li>
                  <li class="mb-2">
                    <Link
                      to="#"
                      class="hover:underline"
                    >
                      Lost Password
                    </Link>
                  </li>
                  <li class="mb-2">
                    <Link
                      to="#"
                      class="hover:underline"
                    >
                      Address
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                  Contact Info
                </h2>
                <ul class="text-gray-400 font-medium text-sm">
                  <li>
                    <Link to="#" class="hover:underline">
                      Street Name, City Zip Code
                    </Link>
                  </li>
                  <li class="my-2">
                    <Link to="#" class="hover:underline">
                      123456789
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="hover:underline">
                      contact@support.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm sm:text-center text-gray-400">
              © 2023{" "}
              <Link to="/" class="hover:underline">
                CERWA™
              </Link>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a
                to="/"
                class="font-medium flex space-x-5 mx-2 md:mx-0 text-gray-400"
              >
                <BsTwitter />
                <BsFacebook />
                <BsPinterest />
                <BsYoutube />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
