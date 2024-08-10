import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Team from "@/components/home/Team";
import Partners from "@/components/home/Partners";
import Feedback from "@/components/home/Feedback";
import Faq from "@/components/home/Faq";
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
