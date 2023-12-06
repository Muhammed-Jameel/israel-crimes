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
    <div>
      <Navbar />
      This is the event page {decodeURIComponent(params.eventName)}
      {/* for now it's only for one section, when data gets retirived this should be a map to read all sections */}
      <h1 className="text-xl">{eventData.title}</h1>
      <h4>{eventData.count}</h4>
      {eventData.sections?.map((section, index) => (
        <div key={index}>
          <div>
            {section.content}
            <Link href={section.urlSource}>{section.linkText}</Link>
          </div>
          <div>
            <iframe src={section.urlMedia}></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default eventPage;
