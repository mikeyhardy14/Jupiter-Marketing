import Hero from "@/components/Hero/Hero";
import Process from "@/components/Process/Process";
import Services from "@/components/Services/Services";
import Faq from "@/components/Faq/Faq";
import CallToActionCard from "@/components/CallToActionCard/CallToActionCard";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process/>
      <Faq/>
      <CallToActionCard/>
    </main>
  );
}