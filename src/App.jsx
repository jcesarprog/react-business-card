import React from "react";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer"
export default function App() {
  return (
    <div className="container">
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
}
