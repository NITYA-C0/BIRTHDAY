import { useState } from "react";
import { Heart, X, Sparkles, ChevronLeft, ChevronRight, Moon, Coffee, Phone, MessageCircle, Clock, Smile, Music, Eye, Star } from "lucide-react";

const messages = [
  { 
    id: 1, 
    emoji: "🌙",
    title: "Late Night Talks",
    message: "Those 3 AM conversations when we forget the world exists. Your voice becomes my favorite lullaby.",
    icon: <Moon className="w-8 h-8 text-indigo-400" />
  },
  { 
    id: 2, 
    emoji: "👁️✨",
    title: "Love in Your Eyes",
    message: "The way your eyes light up when you look at me - it's like seeing the whole universe in just one gaze. I could get lost in them forever and never want to be found.",
    icon: <Eye className="w-8 h-8 text-emerald-500" />
  },
  { 
    id: 3, 
    emoji: "💭",
    title: "Random Thoughts",
    message: "From 'what if we were aliens' to 'our future home' - I love every random thought you share with me.",
    icon: <Sparkles className="w-8 h-8 text-purple-500" />
  },
  { 
    id: 4, 
    emoji: "📱",
    title: "Good Morning & Good Night",
    message: "Your texts are the first thing I look for in the morning and the last thing I see before sleeping.",
    icon: <MessageCircle className="w-8 h-8 text-pink-500" />
  },
  { 
    id: 5, 
    emoji: "😘",
    title: "Your Cute Tantrums",
    message: "The way you pout when you don't get your way, your 'maan nahi raha' face, your silly arguments - I find every single one of them absolutely adorable. Don't ever stop being this cute.",
    icon: <Smile className="w-8 h-8 text-pink-500" />
  },
  { 
    id: 6, 
    emoji: "💕",
    title: "Silence Speaks",
    message: "Even our silences feel comfortable. Just knowing you're there on the other side is enough.",
    icon: <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
  },
  { 
    id: 7, 
    emoji: "🎧",
    title: "Our Playlist",
    message: "Every song reminds me of you now. You've become the melody in my everyday life.",
    icon: <Music className="w-8 h-8 text-blue-500" />
  },
  { 
    id: 8, 
    emoji: "😊✨",
    title: "Tumhara Hasaana",
    message: "Jab tum haste ho na, meri poori duniya roshan ho jaati hai. Woh khilkhilata hasi, woh bholapan - meri zindagi ki sabse pyaari aawaz. Haste raho hamesha, chaand bhi tumse jalta hai I Love you bhut jyada.",
    icon: <Star className="w-8 h-8 text-yellow-500" />
  }
];

export default function PhotoGallery() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [animateIn, setAnimateIn] = useState(false);

  const openPopup = (message) => {
    setSelectedMessage(message);
    setTimeout(() => setAnimateIn(true), 50);
  };

  const closePopup = () => {
    setAnimateIn(false);
    setTimeout(() => setSelectedMessage(null), 300);
  };

  const navigateMessage = (direction) => {
    if (!selectedMessage) return;

    const currentIndex = messages.findIndex(
      (m) => m.id === selectedMessage.id
    );

    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex === 0 ? messages.length - 1 : currentIndex - 1;
    } else {
      newIndex =
        currentIndex === messages.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedMessage(messages[newIndex]);
  };

  return (
    <>
      {/* Messages Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Hmari Pyar Bhari Baatein 💕
            </h2>
            <p className="text-gray-600 text-lg">
              Har pal, har baat, har ehsaas... tumhare liye ✨
            </p>
            <div className="flex justify-center gap-2 mt-4">
              {[...Array(3)].map((_, i) => (
                <Heart key={i} className="w-4 h-4 text-pink-400 fill-pink-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          </div>

          {/* Messages Grid - 8 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {messages.map((msg) => (
              <button
                key={msg.id}
                onClick={() => openPopup(msg)}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-pink-200 text-left"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {msg.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-pink-600 mb-3 group-hover:text-pink-500 transition-colors">
                    {msg.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {msg.message.length > 80 
                      ? msg.message.substring(0, 80) + "..." 
                      : msg.message}
                  </p>
                  <div className="mt-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-4 h-4 text-pink-400" />
                    <span className="text-xs text-pink-400">Click to read more</span>
                    <Sparkles className="w-4 h-4 text-pink-400" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popup - Full Message */}
      {selectedMessage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={closePopup}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateMessage("prev");
            }}
            className="absolute left-2 md:left-6 text-white/70 hover:text-white transition-colors"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateMessage("next");
            }}
            className="absolute right-2 md:right-6 text-white/70 hover:text-white transition-colors"
          >
            <ChevronRight size={40} />
          </button>

          <div
            className="bg-gradient-to-br from-white to-pink-50 rounded-3xl p-8 md:p-10 max-w-lg w-full text-center relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-7xl mb-6 animate-bounce">
              {selectedMessage.emoji}
            </div>

            <div className="flex justify-center mb-4">
              {selectedMessage.icon}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4">
              {selectedMessage.title}
            </h3>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
              "{selectedMessage.message}"
            </p>

            <div className="flex justify-center gap-2 text-pink-400">
              <Heart className="w-5 h-5 fill-pink-400" />
              <Heart className="w-5 h-5 fill-pink-400" />
              <Heart className="w-5 h-5 fill-pink-400" />
            </div>

            <p className="text-sm text-pink-500 mt-4">
              ~ Meri baatein, mere jazbaat ~
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}