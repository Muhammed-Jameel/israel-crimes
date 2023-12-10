import Navbar from "@/components/navbar";
import Link from "next/link";
import React from "react";

const Documentaries = () => {
  const docData = {
    title: "title",
    source: "ths is the maker of this doc",
    brief: "some text about the doc",
    media: "this is the link for the cover image of the doc", //optional
    link: "this is the link for the doc",
  };
  return (
    <div className="flex flex-col justify-between  w-full h-full">
      <Navbar />
      <div className="flex w-full h-full flex-col p-12">
        <h1 className="text-5xl font-bold">{docData.title}</h1>
        <h4 className="text-2xl font-medium pt-4">{docData.source}</h4>

        <div className="flex flex-col lg:flex-row w-full h-full justify-between pt-12">
          <div className="w-full h-full flex flex-col justify-between">
            {docData.brief}
          </div>
          <div className="w-full h-screen flex justify-center">
            <iframe
              src="https://images.unsplash.com/photo-1582058989417-5b48e919ff84?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-4/5 h-2/5"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentaries;
