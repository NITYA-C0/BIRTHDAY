import React from "react";
import BirthdayPage from "./components/birthday-page";
import Confetti from "./components/confetti";
import FloatingHearts from "./components/floating-hearts";
import LovePopup from "./components/love-popup";
import PhotoGallery from "./components/photogallery";
import StarryBackground from "./components/starry-background";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-rose-200 via-pink-100 to-fuchsia-200">

      {/* Background Effects */}
    
      <Confetti />
      <FloatingHearts />

      {/* Main Layout */}
      <div className="relative z-10">

        {/* Hero Section Wrapper */}
        <section className="flex items-center justify-center px-4 pt-12">
          <div className="w-full max-w-5xl bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-12">
            <BirthdayPage />
          </div>
        </section>

        {/* Gallery Section */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto bg-white/50 backdrop-blur-lg rounded-3xl shadow-xl p-6 md:p-10">
            <PhotoGallery />
          </div>
        </section>

        {/* Popup */}
        <LovePopup />
      </div>
    </div>
  );
}

export default App;
