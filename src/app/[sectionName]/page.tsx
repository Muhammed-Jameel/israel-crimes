import Navbar from "@/components/navbar";
import React from "react";

function Section({ params }: { params: { sectionName: string } }) {
  return (
    <div>
      <Navbar />
      this is the section {decodeURIComponent(params.sectionName)}
    </div>
  );
}

export default Section;
