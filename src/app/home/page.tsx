import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />

      <div className="flex flex-col lg:flex-row w-full justify-around h-full items-center">
        <div
          id="right-side"
          className="right-side-home flex flex-col justify-around lg:w-2/5 w-4/5 h-full"
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
            we made sure that all the included media is not made up or fake all
            the events are confirmed to happen, all the data are from reliable
            sources and all claims that are not confirmed mentioned in between
            the lines are removed.
          </p>
        </div>
        <div className="left-side flex lg:w-2/5 w-4/5 h-4/5 justify-center items-center">
          <div className="flex w-full h-full justify-center items-center">
            <iframe
              src="https://images.unsplash.com/photo-1514975498004-6a5d44d0b52e?q=80&w=2179&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full m-6 rounded-md"
            ></iframe>

            <div>{/* Latest event: event name get it from db  */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
