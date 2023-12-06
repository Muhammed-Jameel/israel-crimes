import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
   
      <div className="w-full h-full flex flex-col">
       <Navbar/> 

        <div className="flex w-full m-8 justify-around h-full">
          <div
            id="right-side"
            className="right-side-home flex flex-col justify-around w-2/5 h-full"
          >
            {/* <img src={HomePageArrow} alt="Arrow up" /> */}
            <h1 className="font-semibold text-4xl">
              Everything included in this website is{" "}
              <span id="highlighted" className="highlighted">
                confirmed and officially stated
              </span>
              , no mislead news or anything similar.
            </h1>
            <p className="font-normal text-xl">
              we made sure that all the included media is not made up or fake
              all the events are confirmed to happen, all the data are from
              reliable sources and all claims that are not confirmed mentioned
              in between the lines are removed.
            </p>
          </div>
          <div id="left-side flex w-1/5 h-full">
            <div id="flex w-full h-full justify-center items-center">
              <Image
                src={
                  "https://pbs.twimg.com/media/GACnm_HWMAAcFL1?format=jpg&name=large"
                }
                alt="latest event image"
                width={500}
                height={500}
                className="w-6/12 h-8/12"
              />

              <div>{/* Latest event: event name get it from db  */}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
