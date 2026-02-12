"use client";

import { useEffect, useState } from "react";
import { Heart, X, Sparkles, Stars } from "lucide-react";

export default function LovePopup({ isOpen, onClose }) {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setAnimateIn(true), 50);
    } else {
      setAnimateIn(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-500 ${
          animateIn ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Popup Container */}
      <div
        className={`relative max-w-md w-full transition-all duration-500 transform ${
          animateIn ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glowing border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-gold rounded-3xl blur-lg opacity-50 animate-pulse" />

        {/* Main Card */}
        <div className="relative bg-card/90 backdrop-blur-xl rounded-3xl border border-border/50 overflow-hidden shadow-2xl">
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-gold to-secondary" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors z-10"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Content */}
          <div className="p-8 pt-10 text-center">
            {/* Animated hearts */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Heart className="w-16 h-16 text-primary fill-primary animate-pulse drop-shadow-lg" />
                <Sparkles
                  className="w-6 h-6 text-gold absolute -top-2 -right-2 animate-spin"
                  style={{ animationDuration: "3s" }}
                />
                <Stars
                  className="w-5 h-5 text-secondary absolute -bottom-1 -left-2 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-sans">My Dearest Shashank</h3>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 my-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-gold" />
              <Heart className="w-4 h-4 text-gold fill-gold" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-gold" />
            </div>

            {/* Message */}
            <p className="text-foreground/80 leading-relaxed mb-6">
              You are the most amazing person I have ever met. Your smile lights up my world, and your love makes every
              day special. I am so blessed to have you in my life.
            </p>

            <p className="text-foreground/90 font-medium mb-6 text-lg italic">
              &ldquo;You are my today and all of my tomorrows.&rdquo;
            </p>

            {/* Love meter */}
            <div className="bg-muted/30 rounded-full p-4 mb-6">
              <p className="text-sm text-muted-foreground mb-2">My love for you</p>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary via-secondary to-gold rounded-full transition-all duration-1000"
                  style={{ width: animateIn ? "100%" : "0%" }}
                />
              </div>
              <p className="text-gold font-bold mt-2 text-lg">Infinite %</p>
            </div>

            {/* Signature */}
            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-sans">
                Forever Yours, Nitya
              </p>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className="w-4 h-4 text-primary fill-primary animate-pulse"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}