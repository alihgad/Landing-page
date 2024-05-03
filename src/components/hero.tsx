import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <>
      <section className="h-screen flex justify-center items-center flex-col px-x text-center pt-[35rem] md:pt-10">
        <div className="md:w-3/4 md:px-20 px-3 text-center flex justify-center items-center flex-col ">
          <h1 className="text-5xl md:text-6xl font-bold md:font-extrabold">
            {" "}
            We make great digital products for{" "}
            <span className="text-blue-400">innovative</span> brands.
          </h1>
          <p className=" my-5 md:w-1/2 text-gray-700 font-medium">
            Get your desierd design services from our talented designers, around
            the world at a reasonable cost
          </p>
        </div>

        <div className="flex w-full max-w-md items-center flex-col ">
          <div className="flex  sm:w-full max-w-md items-center space-x-2">
            <Input
              className="rounded-full shadow-lg sahdow-gray-400   "
              type="email"
              placeholder="Your work E-mail"
            />
            <Button
              className="rounded-full bg-blue-400 text-black font medium shadow-lg  shadow-gray-400 px-5"
              type="submit"
            >
              Book a call
            </Button>
          </div>
          <div className="text-sm flex my-5 items-center">
            <p className="mr-1">
              4.6/5.0
              <i className="fas fa-star text-yellow-300 mr-1"></i>
              <i className="fas fa-star text-yellow-300 mr-1"></i>
              <i className="fas fa-star text-yellow-300 mr-1"></i>
              <i className="fas fa-star text-yellow-300 mr-1"></i>
              <i className="fas fa-star-half text-yellow-300 mr-1"></i>
              15+ Businesses, 35+ Happy clients
            </p>
          </div>
        </div>

        <div className="flex-col md:flex-row flex gap-y-10 md:gap-x-30 mt-10 pb-10">
          <div className="flex flex-col justify-center items-center px-10 md:px-28 font-medium">
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-blue-200 ">
              <i className="fas fa-display fa-lg text-blue-400"></i>
            </div>

            <p className="text-blue-400 font-extrabold text-2xl">Web Design</p>
            <p>Crafting websites that convert and grow your business</p>
          </div>

          <div className="flex flex-col justify-center items-center md:px-28 font-medium">
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-blue-200 ">
              <i className="fas fa-mobile fa-lg text-blue-400"></i>
            </div>
            <p className="text-blue-400 font-extrabold text-2xl">
              App Development
            </p>
            <p className="px-5">Beautifully designed apps that your users will love to use</p>
          </div>

          <div className="flex flex-col justify-center items-center md:px-28 font-medium">
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-blue-200 ">
              <i className="fas fa-display fa-lg text-blue-400"></i>
            </div>
            <p className="text-blue-400 font-extrabold text-2xl">UX Audit</p>
            <p>Get a detailed UX report on your marketing website</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
