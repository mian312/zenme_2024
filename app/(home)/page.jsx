import FeatureSection from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <div className="flex overflow-hidden flex-col bg-white max-md:pb-24">
      <Hero />
      <FeatureSection />
      <Testimonial />
    </div>
  );
}
