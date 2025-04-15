import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Features from "@/components/features";
import GettingStarted from "@/components/gettingstarted";

export default function Home() {
  return (
   <>
   <Navbar />
   <Hero/>
   <About/>
   <Features/>
   <GettingStarted/>
   </>
  );
}
