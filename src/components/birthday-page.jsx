import React, { useEffect, useState } from "react";
import { Heart, Sparkles, Cake, Star, Gift } from "lucide-react";

export default function BirthdayPage() {
  const [showMessage, setShowMessage] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Create confetti effect
  useEffect(() => {
    if (showSurprise) {
      const newConfetti = [...Array(50)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 3,
        size: Math.floor(Math.random() * 10) + 5,
        color: ['#FF69B4', '#FFD700', '#FFA500', '#FF1493', '#FFB6C1'][Math.floor(Math.random() * 5)]
      }));
      setConfetti(newConfetti);
      
      const timer = setTimeout(() => {
        setShowSurprise(false);
        setConfetti([]);
      }, 8000);
      
      return () => clearTimeout(timer);
    }
  }, [showSurprise]);

  const surpriseMessages = [
    {
      emoji: "🌹",
      title: "My Love",
      message: "You're not just my boyfriend, you're my best friend, my confidant, and my home."
    },
    {
      emoji: "💕",
      title: "You're My Favorite Person",
      message: "Every day with you feels like a celebration. Thank you for being you!"
    },
    {
      emoji: "✨",
      title: "My Wish For You",
      message: "I wish you all the happiness in the world because you deserve nothing less."
    },
    {
      emoji: "🎂",
      title: "Another Year, Another Adventure",
      message: "Can't wait to create more beautiful memories with you!"
    },
    {
      emoji: "💝",
      title: "You Make My World Brighter",
      message: "Just like these stars, you light up my life every single day."
    },
  ];

  const [currentSurpriseIndex, setCurrentSurpriseIndex] = useState(0);

  const handleSurpriseClick = () => {
    setShowSurprise(true);
    const randomIndex = Math.floor(Math.random() * surpriseMessages.length);
    setCurrentSurpriseIndex(randomIndex);
  };

  const nextMessage = () => {
    setCurrentSurpriseIndex((prev) => 
      prev === surpriseMessages.length - 1 ? 0 : prev + 1
    );
  };

  const prevMessage = () => {
    setCurrentSurpriseIndex((prev) => 
      prev === 0 ? surpriseMessages.length - 1 : prev - 1
    );
  };

  return (
    <main className="min-h-screen relative overflow-hidden px-4 py-16 bg-gradient-to-b from-pink-50 to-rose-50">
      
      {/* Confetti Effect */}
      {showSurprise && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {confetti.map((c) => (
            <div
              key={c.id}
              className="absolute animate-confetti"
              style={{
                left: `${c.left}%`,
                top: '-10%',
                width: `${c.size}px`,
                height: `${c.size}px`,
                backgroundColor: c.color,
                animationDelay: `${c.animationDelay}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0%',
              }}
            />
          ))}
        </div>
      )}

      {/* Sundar sa dil background pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => {
            const size = Math.floor(Math.random() * 40) + 20;
            const left = Math.floor(Math.random() * 100);
            const top = Math.floor(Math.random() * 100);
            const delay = Math.floor(Math.random() * 5);
            const duration = Math.floor(Math.random() * 10) + 10;
            
            return (
              <Heart
                key={i}
                className="absolute text-pink-400 fill-pink-400 animate-float"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            );
          })}
        </div>
        
        <div className="absolute inset-0 opacity-5">
          {[...Array(25)].map((_, i) => (
            <Heart
              key={`red-${i}`}
              className="absolute text-red-300 fill-red-300 animate-float-slow"
              style={{
                width: `${Math.floor(Math.random() * 60) + 30}px`,
                height: `${Math.floor(Math.random() * 60) + 30}px`,
                left: `${Math.floor(Math.random() * 100)}%`,
                top: `${Math.floor(Math.random() * 100)}%`,
                animationDelay: `${Math.floor(Math.random() * 8)}s`,
                animationDuration: `${Math.floor(Math.random() * 15) + 15}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Surprise Modal */}
      {showSurprise && (
        <div className="fixed inset-0 flex items-center justify-center z-40 px-4 animate-fadeIn">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => {
            setShowSurprise(false);
            setConfetti([]);
          }} />
          
          <div className="relative bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl p-1 shadow-2xl max-w-lg w-full animate-slideUp">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8">
              
              <button 
                onClick={() => {
                  setShowSurprise(false);
                  setConfetti([]);
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <span className="text-2xl">&times;</span>
              </button>

              <div className="text-center">
                <div className="text-6xl mb-4 animate-bounce">
                  {surpriseMessages[currentSurpriseIndex].emoji}
                </div>
                
                <h3 className="text-2xl font-bold text-pink-600 mb-3">
                  {surpriseMessages[currentSurpriseIndex].title}
                </h3>
                
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {surpriseMessages[currentSurpriseIndex].message}
                </p>

                <div className="flex justify-center gap-4 mb-4">
                  <button 
                    onClick={prevMessage}
                    className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors text-sm font-semibold"
                  >
                    ← Previous
                  </button>
                  <button 
                    onClick={nextMessage}
                    className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors text-sm font-semibold"
                  >
                    Next →
                  </button>
                </div>

                <div className="flex justify-center gap-2 text-pink-400">
                  {surpriseMessages.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-2 h-2 rounded-full ${
                        idx === currentSurpriseIndex ? 'bg-pink-500' : 'bg-pink-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center">
        <div
          className={`text-center transition-all duration-1000 transform ${
            showMessage
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Hero Photo */}
          <div className="mb-10 flex justify-center">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-pink-400 shadow-2xl overflow-hidden bg-white">
              <img 
                src="/birthday.jpeg" 
                alt="My love"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Date Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-pink-200 mb-6">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm tracking-widest uppercase text-gray-700">
              13th February
            </span>
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 drop-shadow-sm">
            Happy Birthday
          </h1>

          <h2 className="text-5xl md:text-7xl font-bold text-pink-500 mb-6 drop-shadow-md">
            Shashank
          </h2>

          <div className="flex justify-center gap-3 my-6">
            {[...Array(3)].map((_, i) => (
              <Heart
                key={i}
                className="w-5 h-5 text-pink-500 fill-pink-500 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>

          <div className="mb-8 flex justify-center">
            <Cake className="w-16 h-16 text-yellow-500 drop-shadow-lg" />
          </div>

          <div className="mb-8">
            <button
              onClick={handleSurpriseClick}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-slow"
            >
              <Gift className="w-6 h-6 animate-bounce" />
              Click for a Surprise, Shashank! 💝
              <Sparkles className="w-5 h-5 animate-spin-slow" />
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            </button>
            <p className="text-sm text-pink-500 mt-3 animate-pulse">
              ✨ Something special is waiting for you ✨
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-pink-100">
            <p className="text-gray-700 mb-4 italic text-lg">
              “On your special day, I want you to know how much you mean to me.
              Every moment with you is a gift.”
            </p>
            <p className="text-gray-600 mb-6">
              May this year bring you happiness, success, and endless love.
            </p>
            <p className="text-2xl font-bold text-pink-500 text-center">
              ~ Nitya
            </p>
          </div>
        </div>
      </section>

      {/* MEMORY CARDS - PHOTO SIZE FIXED - PURI PHOTO DIKHEGI ✅ */}
      <section className="py-16 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-500 mb-12 drop-shadow-md">
          Our Beautiful Memories 💕
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          
          {/* CARD 1 - Beautiful Smile - ASPECT RATIO FIXED ✅ */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-all duration-500 border border-pink-200 group">
            <div className="aspect-w-4 aspect-h-3 bg-pink-50">
              <img 
                src="/firstphoto.jpeg" 
                alt="Beautiful Smile"
                className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6 text-center">
              <div className="flex justify-center gap-2 mb-3">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-pink-500 mb-3">
                Beautiful Smile
              </h3>
              <p className="text-gray-600 text-lg">
                Your smile lights up my entire world and makes every day brighter.
              </p>
              <div className="mt-4 flex justify-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <Heart key={i} className="w-4 h-4 text-pink-400 fill-pink-400" />
                ))}
              </div>
            </div>
          </div>

          {/* CARD 2 - Our Precious Moment - ASPECT RATIO FIXED ✅ */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-all duration-500 border border-pink-200 group">
            <div className="aspect-w-4 aspect-h-3 bg-pink-50">
              <img 
                src="/second.jpeg" 
                alt="Our Precious Moment"
                className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6 text-center">
              <div className="flex justify-center gap-2 mb-3">
                <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
                <span className="text-3xl">💕</span>
              </div>
              <h3 className="text-2xl font-bold text-pink-500 mb-3">
                Our Precious Moment
              </h3>
              <p className="text-gray-600 text-lg">
                Every moment with you is a treasure I'll cherish forever.
              </p>
              <div className="mt-4 flex justify-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <Heart key={i} className="w-4 h-4 text-pink-400 fill-pink-400" />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Tailwind Aspect Ratio Plugin ke liye */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-10deg); }
        }
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 15s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
        .animate-confetti { animation: confetti 4s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
        .animate-slideUp { animation: slideUp 0.5s ease-out; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        
        /* Aspect Ratio Classes */
        .aspect-w-4 {
          position: relative;
          padding-bottom: calc(3 / 4 * 100%);
        }
        .aspect-w-4 > * {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </main>
  );
}