import About from "./components/home/About";
import CTA from "./components/home/CTA";
import Features from "./components/home/Features";
import Hero from "./components/home/Hero";
import PopularItems from "./components/home/PopularItems";
import Services from "./components/home/Services";
import Testimonials from "./components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About></About>
      <Services></Services>
      <PopularItems></PopularItems>
      <Testimonials></Testimonials>
      <CTA></CTA>
    </>
  );
}
