import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Welcome from "@/components/Welcome";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <Banner/>
    <Welcome/>
    <AboutUs/>
    <WhyChooseUs/>
    <Services/>
    <Testimonials/>
  </div>
  );
}
