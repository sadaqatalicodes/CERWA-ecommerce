import React from "react";
import logo from "../assets/logo.png"
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  }
  return (
    <div>
      <nav class="bg-white shadow-md border-gray-200 sticky">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              class="h-8"
              alt="Flowbite Logo"
            />
            {/* <span class="self-center text-2xl font-semibold whitespace-nowrap :text-white">
              CERWA
            </span> */}
          </Link>
          <div class="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              class="md:hidden text-gray-500 :text-gray-400 hover:bg-gray-100 :hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 :focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
            <div class="relative hidden md:block mr-4">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 :text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-500 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 :bg-gray-700 focus:outline-none"
                placeholder="Search..."
              />
            </div>
            <div class="hidden xl:flex items-center space-x-5">
              <a class=" hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </a>
              <a class="flex items-center  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span class="flex absolute -mt-5 ml-4">
                  <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-red-700"></span>
                </span>
              </a>
              <a class="flex items-center hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 :text-gray-400 :hover:bg-gray-700 :focus:ring-gray-600"
              aria-controls="navbar-search"
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
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div class="relative mt-3 md:hidden">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 :text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-red-500 :focus:border-red-500"
                placeholder="Search..."
              />
            </div>
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 uppercase :border-gray-700">
              <li>
                <Link
                  to="/headphones"
                  className={`block py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:p-0 md::hover:text-red-500 md::hover:bg-transparent md:hover:border-red-500 md:hover:border-b-2 ${
                    isActive('/headphones') ? 'sm:border-b-2 sm:border-red-500' : ''
                  }`}
                  aria-current="page"
                >
                  Headphones
                </Link>
              </li>
              <li>
                <Link
                  to="/gameconsole"
                  className={`block py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:p-0 md::hover:text-red-500 md::hover:bg-transparent md:hover:border-red-500 md:hover:border-b-2 ${
                    isActive('/gameconsole') ? 'sm:border-b-2 sm:border-red-500' : ''
                  }`}
                >
                  Game Console
                </Link>
              </li>
              <li>
                <Link
                  to="/laptop"
                  className={`block py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:p-0 md::hover:text-red-500 md::hover:bg-transparent md:hover:border-red-500 md:hover:border-b-2 ${
                    isActive('/laptop') ? 'sm:border-b-2 sm:border-red-500' : ''
                  }`}
                >
                  laptop
                </Link>
              </li>
              <li>
                <Link
                  to="/mobiles"
                  className={`block py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:p-0 md::hover:text-red-500 md::hover:bg-transparent md:hover:border-red-500 md:hover:border-b-2 ${
                    isActive('/mobiles') ? 'sm:border-b-2 sm:border-red-500' : ''
                  }`}
                >
                  mobile
                </Link>
              </li>
              <li>
                <Link
                  to="/watches"
                  className={`block py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:p-0 md::hover:text-red-500 md::hover:bg-transparent md:hover:border-red-500 md:hover:border-b-2 ${
                    isActive('/watches') ? 'sm:border-b-2 sm:border-red-500' : ''
                  }`}
                >
                  smart watch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
