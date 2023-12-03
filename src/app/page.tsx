import Image from "next/image";
import HomePage from "./home/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full h-100 p-24">
      <HomePage />
    </main>
  );
}
