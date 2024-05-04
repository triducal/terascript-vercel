"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
