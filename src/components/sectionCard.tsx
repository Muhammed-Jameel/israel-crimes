import Link from "next/link";
import React from "react";

interface Section {
  name: string;
  background: string;
  deathCount: number;
}
// sections will have costume backgrounds, names, links and maybe colors
const SectionCard: React.FC<{ section: Section }> = ({ section }) => {
  return (
    <div
      className={`section-card bg-[https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D]`}
    >
      <Link href={`/${section.name}`}>
        {section.name} {section.deathCount}
      </Link>
    </div>
  );
};

export default SectionCard;
