import ListComponent from "@/components/CardsList";
import Navbar from "@/components/navbar";

import React from "react";

const Child = ({
  params,
}: {
  params: { sectionChild: string; sectionName: string };
}) => {
  const eventsList = [
    {
      name: "event name",
      counter: 123,
      imageLink:
        "https://images.unsplash.com/photo-1529080666093-e863229ff121?q=80&w=2529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "event name",
      counter: 123,
      imageLink:
        "https://images.unsplash.com/photo-1529080666093-e863229ff121?q=80&w=2529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "event name",
      counter: 123,
      imageLink:
        "https://images.unsplash.com/photo-1529080666093-e863229ff121?q=80&w=2529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "event name",
      counter: 123,
      imageLink:
        "https://images.unsplash.com/photo-1529080666093-e863229ff121?q=80&w=2529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "event name",
      counter: 123,
      imageLink:
        "https://images.unsplash.com/photo-1529080666093-e863229ff121?q=80&w=2529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "event name",
      counter: 123,
      imageLink:
        "https://images.unsplash.com/photo-1529080666093-e863229ff121?q=80&w=2529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />

      <ListComponent
        items={eventsList}
        route={`${decodeURIComponent(params.sectionName)}/${decodeURIComponent(
          params.sectionChild
        )}`}
      />
    </div>
  );
};

export default Child;
