import Navbar from "@/components/navbar";
import Link from "next/link";
import React from "react";

const eventPage = ({
  params,
}: {
  params: { eventName: string; sectionChild: string };
}) => {
  // some static event data
  const eventData = {
    id: 122222,
    title: "Title of the Event",
    location: "Location data",
    date: "2023-01-01T12:00:00",
    type: "Type of Event",
    count: 123,
    metaDataMedia: {},

    sections: [
      {
        type: "text",
        content: "Text content of the section",
        urlMedia: "URL for the media",
        metaDataMedia: {},
        urlSource: "Some link to the source",
        linkText: "Text to show on the link",
      },
      {
        type: "text",
        content: "Text content of the section",
        urlMedia: "URL for the media",
        metaDataMedia: {},
        urlSource: "Some link to the source",
        linkText: "Text to show on the link",
      },
      {
        type: "text",
        content: "Text content of the section",
        urlMedia: "URL for the media",
        metaDataMedia: {},
        urlSource: "Some link to the source",
        linkText: "Text to show on the link",
      },
    ],
  };

  //end of static event data
  return (
    <div className="flex flex-col justify-between  w-full h-full">
      <Navbar />

      {/* <h1 className="text-3xl font-bold">{eventData.title}</h1>
      <h4 className="text-xl font-semibold">{eventData.count}</h4> */}
      <div className="flex w-full h-full flex-col p-12">
        <h1 className="text-5xl font-bold">{eventData.title}</h1>
        <h4 className="text-2xl font-medium pt-4">
          Death count: {eventData.count}
        </h4>
        {eventData.sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row w-full h-full justify-between pt-12"
          >
            <div className="w-full h-full flex flex-col justify-between">
              {section.content}
              <Link target=" " href={section.urlSource}>
                {section.linkText}
              </Link>
            </div>
            <div className="w-full h-screen flex justify-center">
              <iframe
                src="https://images.unsplash.com/photo-1582058989417-5b48e919ff84?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-4/5 h-2/5"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default eventPage;
