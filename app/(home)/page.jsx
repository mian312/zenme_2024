import FeatureSection from "@/components/home/Feature";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Testimonial from "@/components/home/Testimonial";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex overflow-hidden flex-col bg-white max-md:pb-24">
      <Header />
      <Hero />
      <FeatureSection />
      <Testimonial />
      <Footer />
    </div>
  );
}
