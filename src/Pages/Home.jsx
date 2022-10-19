import React from "react";
import {
  About,
  Blogs,
  Contact,
  Contributor,
  Footer,
  Hero,
  Navbar,
  Services,
  Skills,
  SuccessfulWork,
  Testimonial,
} from "../components";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Contributor />
      <About />
      <Services />
      <Skills />
      <SuccessfulWork />
      <Testimonial />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
}
