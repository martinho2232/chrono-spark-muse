import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const UrgencyModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full relative shadow-2xl animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <div className="text-center space-y-4">
          <div className="text-4xl mb-2">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800">ATENÇÃO!</h2>
          
          <p className="text-gray-700 leading-relaxed">
            Estoque limitado se esgotando rapidamente!<br/>
            Esta é uma oportunidade única de conseguir<br/>
            <span className="font-bold text-coral">35 livros educativos</span> por um preço<br/>
            inacreditável!
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-3 my-4">
            <div className="flex items-center justify-center gap-2 text-red-600 font-bold">
              👥 Apenas 24 unidades restantes!
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-3 my-4">
            <div className="flex items-center justify-center gap-2 text-green-600 font-bold">
              📈 +247 pessoas visualizando agora
            </div>
          </div>

          <div className="text-sm text-gray-600 mb-4">
            🔥 <span className="font-bold">Últimas 24h:</span> Mais de 150 famílias garantiram os 35 livros
          </div>

          <Button
            onClick={handleClose}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 text-lg py-3 rounded-xl font-bold animate-pulse-fast"
          >
            🛒 GARANTIR MINHA CÓPIA AGORA!
          </Button>

          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 text-sm underline mt-2"
          >
            Fechar e continuar navegando
          </button>
        </div>
      </div>
    </div>
  );
};