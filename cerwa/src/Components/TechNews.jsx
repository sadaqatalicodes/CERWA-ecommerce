import React from "react";
import news1 from "../assets/ban1.jpg";
import news2 from "../assets/ban2.jpg";
import news3 from "../assets/ban3.jpg";

const TechNews = () => {
  return (
    <>
      <div class=" bg-gray-100 flex flex-col justify-center pb-10">
        <h1 className="text-center mt-10 text-4xl font-semibold text-gray-800">
          Get The <span className="text-red-600 font-bold">Tech News</span>
        </h1>
        <div className="flex justify-center gap-2 my-4">
          <hr className="w-1.5 border-[3px] rounded-3xl border-red-600" />
          <hr className="w-1.5 border-[3px] rounded-3xl border-red-600" />
          <hr className="w-1.5 border-[3px] rounded-3xl border-red-600" />
          <hr className="w-28 border-[2.5px] rounded-3xl border-red-600" />
        </div>
        <div className="relative mt-3 gap-4 flex flex-wrap mx-auto justify-center">
          <div className="text-center">
            <img
              class="h-44 md:w-[24rem] w-80"
              src={news1}
            />
            <h1 className="text-gray-700 font-medium mt-3">E-Comerce, Latest E-Commerce, Reatil News</h1>
          </div>
          <div className="text-center mx-6 md:my-0 my-4">
            <img
              class="h-44 md:w-[24rem] w-80"
              src={news2}
            />
            <h1 className="text-gray-700 font-medium mt-3">Where to Read The Latest E-Commerce News</h1>
          </div>
          <div className="text-center">
            <img
              class="h-44 md:w-[24rem] w-80"
              src={news3}
            />
            <h1 className="text-gray-700 font-medium mt-3">The Latest International E-Commerce News</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechNews;
