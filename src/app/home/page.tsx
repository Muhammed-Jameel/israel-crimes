import Navbar from "@/components/navbar";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="w-100 h-100 flex flex-col">
        <Navbar />

        <div
          id="right-side"
          className="right-side-home flex flex-col justify-around w-2/5 h-100"
        >
          {/* <img src={HomePageArrow} alt="Arrow up" /> */}
          <h1 className="">
            Everything included in this website is{" "}
            <span id="highlighted" className="highlighted">
              confirmed and officially stated
            </span>
            , no mislead news or anything similar.
          </h1>
          <p>
            we made sure that all the included media is not made up or fake all
            the events are confirmed to happen, all the data are from reliable
            sources and all claims that are not confirmed mentioned in between
            the lines are removed.
          </p>
        </div>
        <div id="left-side flex w-4/5 h-100">
          <div id="content-continer">
            <img
              id="homePage-content"
              src="get the source from db"
              alt=""
              className="w-4-5 h-4/5"
            />
            <div>{/* Latest event: event name get it from db  */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
