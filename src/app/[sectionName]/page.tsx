import ListComponent from "@/components/CardsList";
import Navbar from "@/components/navbar";
import React from "react";

function Section({ params }: { params: { sectionName: string } }) {
  let itemss = [
    {
      name: "2023",
      imageLink:
        "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      counter: 0,
    },
    {
      name: "Paris",
      imageLink:
        "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      counter: 0,
    },
    {
      name: "Tokyo",
      imageLink:
        "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      counter: 0,
    },
    {
      name: "London",
      imageLink:
        "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      counter: 0,
    },
    {
      name: "New York",
      imageLink:
        "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      counter: 0,
    },
    {
      name: "Paris",
      imageLink:
        "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      counter: 0,
    },
    {
      name: "Tokyo",
      imageLink:
        "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      counter: 0,
    },
    {
      name: "London",
      imageLink:
        "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      counter: 0,
    },
    {
      name: "New York",
      imageLink:
        "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      counter: 0,
    },
    {
      name: "Paris",
      imageLink:
        "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      counter: 0,
    },
    {
      name: "Tokyo",
      imageLink:
        "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      counter: 0,
    },
    {
      name: "London",
      imageLink:
        "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      counter: 0,
    },
  ];

  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      {/* this is the section {decodeURIComponent(params.sectionName)} */}
      <ListComponent items={itemss} />
    </div>
  );
}

export default Section;
