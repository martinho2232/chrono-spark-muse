import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-md">
      <div className="bg-coral p-4 rounded-xl shadow-strong border-2 border-yellow-accent">
        <div className="text-center text-white space-y-2">
          <div className="font-bold text-lg">🔥 OFERTA LIMITADA</div>
          <div className="text-xl font-bold">35 Livros por R$ 10,00!</div>
          <Button 
            className="w-full bg-yellow-accent text-black hover:bg-yellow-accent/90 font-bold py-3 rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            💳 GARANTIR AGORA!
          </Button>
        </div>
      </div>
    </div>
  );
};