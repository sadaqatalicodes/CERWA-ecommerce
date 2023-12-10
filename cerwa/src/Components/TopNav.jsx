import React from "react";
import { BsFacebook, BsPinterest, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <nav class="bg-gray-900 border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2.5">
          <a
            to="/"
            class="font-medium flex space-x-5 mx-2 md:mx-0 text-gray-300"
          >
            <BsTwitter />
            <BsFacebook />
            <BsPinterest />
            <BsYoutube />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-6 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-5 rtl:space-x-reverse md:mt-0 ">
              <li>
                <Link
                  to="/blog"
                  class="block py-2 px-3 text-gray-300 md md:p-0"
                  aria-current="page"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  class="block py-2 px-3 text-gray-300 md md:p-0"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/whishlist"
                  class="block py-2 px-3 text-gray-300 md md:p-0"
                >
                  Whishlist
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  class="block py-2 px-3 text-gray-300 md md:p-0"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
