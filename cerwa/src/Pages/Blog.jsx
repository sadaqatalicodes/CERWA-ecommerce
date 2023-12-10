import React from "react";
import news1 from "../assets/ban1.jpg";
import news2 from "../assets/ban2.jpg";
import news3 from "../assets/ban3.jpg";

const Blog = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-4">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[790px] text-center lg:mb-16">
                <div className="mb-10">
                  <h1 className="text-center mt-10 text-4xl font-semibold text-gray-800">
                    Our{" "}
                    <span className="text-red-600 font-bold">Recent News</span>
                  </h1>
                  <div className="flex justify-center gap-2 my-4">
                    <hr className="w-1.5 border-[3px] rounded-3xl border-red-600" />
                    <hr className="w-1.5 border-[3px] rounded-3xl border-red-600" />
                    <hr className="w-1.5 border-[3px] rounded-3xl border-red-600" />
                    <hr className="w-28 border-[2.5px] rounded-3xl border-red-600" />
                  </div>
                </div>
                <p className="text-lg font-medium text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  adipisci exercitationem officiis sint doloremque unde beatae
                  facilis pariatur, modi veniam tenetur consectetur alias labore
                  harum reprehenderit. Sint dolorum doloremque porro aperiam, et
                  quasi ad laboriosam perspiciatis. reprehenderit. Sint dolorum
                  doloremque porro aperiam, et quasi ad laboriosam .
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Lorem Ipsum is simply dummy text of the printing"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image={news1}
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Lorem Ipsum is simply dummy text of the printing"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image={news2}
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Lorem Ipsum is simply dummy text of the printing"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image={news3}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-4 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="mb-2 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose">
                {date}
              </span>
            )}
            <h3>
              <a
                href="#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color">{CardDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};
