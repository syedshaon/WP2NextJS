import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Team from "@/components/home/Team";
import Partners from "@/components/home/Partners";
import Feedback from "@/components/home/Feedback";
import Faq from "@/components/home/Faq";
export const metadata: Metadata = {
  title: "Sky Enterprise | Home",
  description: "Welcome to Sky Enterprise, your trusted partner for WordPress to NextJS conversion services. We build fast, secure, and scalable web applications.",
};
export default function Home() {
  return (
    <>
      {/* Hero Area */}
      <Hero />
      {/* Intro Area */}

      <Intro />

      {/* Team Area */}

      <Team />

      {/* Partners */}
      <Partners />

      {/* Feedback */}
      <Feedback />

      {/* FAQ */}
      <Faq />
    </>
  );
}
