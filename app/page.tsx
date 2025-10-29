import Hero from "./components/hero";
import Features from "./components/features";
import HowItWork from "./components/howItWork";
import FAQ from "./components/faq";
import CallToAction from "./components/callToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWork />
      <FAQ />
      <CallToAction />
    </main>
  );
}
