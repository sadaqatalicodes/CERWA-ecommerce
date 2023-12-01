import React from "react";
import { BsArrowReturnLeft, BsCart, BsHouse } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <>
      <div class="my-">
        <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-6 shadow-2xl sm:px-24 xl:py-12">
          <h2 class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Keep Updated
          </h2>

          <p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            veritatis magnam corporis modi ex?
          </p>

          <form class="mx-auto mt-10 flex max-w-md gap-x-4">
            <label for="email-address" class="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />

            <button
              type="submit"
              class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Notify me
            </button>
          </form>

          <svg
            viewBox="0 0 1024 1024"
            class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fill-opacity="0.7"
            ></circle>
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stop-color="#7775D6"></stop>
                <stop offset="1" stop-color="#7ED321" stop-opacity="0"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="flex justify-around mx-2 text-center">
          <div className="">
            <BsCart className="text-4xl text-gray-700 mx-auto mt-4" />
            <h1 className="text-2xl font-semibold my-4">Piriority Shipping</h1>
            <p className="text-md font-medium text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
          <div className="border-l-2 jus">
            <BsArrowReturnLeft className="text-4xl text-gray-700 mx-auto mt-4" />
            <h1 className="text-2xl font-semibold my-4">Free Return</h1>
            <p className="text-md font-medium text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
          <div className="border-l-2">
            <BsHouse className="text-4xl text-gray-700 mx-auto mt-4" />
            <h1 className="text-2xl font-semibold my-4">In-home Setup</h1>
            <p className="text-md font-medium text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
          <hr className="border border-gray-300"/>
      </div>
    </>
  );
};

export default NewsLetter;
