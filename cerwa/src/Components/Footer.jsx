import React from "react";
import logo from "../assets/flogo.jpg";
import { BsFacebook, BsPinterest, BsTwitter, BsYoutube } from "react-icons/bs";


const Footer = () => {
  return (
    <>
      <footer class="bg-black">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0 w-48">
              <a href="/" class="flex items-center">
                <img
                  src={logo}
                  class="h-[2.5] me-3 w-48"
                  alt="FlowBite Logo"
                />
              </a>
              <p className="text-gray-400" >Lorem ipsum dolor amet consec, adip elit. Odit alias qui minus fugiat quos am dasdeng streng faskter.</p>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                  Resources
                </h2>
                <ul class="text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="https://flowbite.com/" class="hover:underline">
                      Flowbite
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                  Follow us
                </h2>
                <ul class="text-gray-400 font-medium">
                  <li class="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      class="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                  Legal
                </h2>
                <ul class="text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm sm:text-center text-gray-400">
              © 2023{" "}
              <a href="/" class="hover:underline">
                CERWA™
              </a>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a
            href="/"
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
