"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";
import HomePage from "./home/page";

export default function Home() {
  useEffect(() => {
    redirect("/home");
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomePage />
    </main>
  );
}
