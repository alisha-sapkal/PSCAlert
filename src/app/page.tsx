import { LandingPage } from "@/components/LandingPage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <h1 className="text-center text-3xl"></h1>
    <LandingPage/>
  </main>
  );
}
