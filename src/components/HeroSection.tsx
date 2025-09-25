import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CountdownTimer } from "./CountdownTimer";
import coloringBookCover from "@/assets/coloring-book-cover.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Alert Banner */}
      <div className="bg-gradient-coral text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="text-yellow-accent">🔥</span>
          <span className="font-bold">ÚLTIMAS HORAS: 94% OFF - 35 livros por R$ 10,00!</span>
          <Badge variant="secondary" className="bg-white/20 text-white border-none">
            Estoque limitado: 23 unidades
          </Badge>
        </div>
      </div>

      {/* Main Hero */}
      <div className="bg-gradient-to-br from-gray-light to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                  <span className="text-foreground">Aprenda a fé</span>
                  <br />
                  <span className="bg-gradient-blue bg-clip-text text-transparent">
                    brincando!
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  <span className="font-bold text-2xl text-foreground">35 Livros Completos</span> para colorir e ensinar a fé católica de forma divertida!
                </p>
                <p className="text-lg text-muted-foreground">
                  Uma coleção completa com 35 livros digitais repletos de desenhos bíblicos, versículos e atividades para fortalecer a fé em família. <span className="font-bold">Mais de 1.000 páginas</span> de conteúdo educativo!
                </p>
              </div>

              {/* Countdown */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-coral">OFERTA EXPIRA EM:</h3>
                <CountdownTimer />
                <p className="text-center text-lg">
                  <span className="text-yellow-accent">⚡</span>
                  <span className="font-bold"> Depois disso os 35 livros voltam para R$ 175,00!</span>
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="text-coral">💖</span>
                  Mais de 500 famílias satisfeitas
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-success">✅</span>
                  Garantia de 7 dias
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-start">⚡</span>
                  Acesso imediato
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-gradient-blue hover:shadow-glow transform hover:scale-105 transition-all duration-300 text-lg py-6 px-8 rounded-xl font-bold shadow-strong"
              >
                🙏 GARANTIR 35 LIVROS - OFERTA LIMITADA!
              </Button>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={coloringBookCover}
                  alt="35 Livros de Colorir com Devocional Infantil"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-strong transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -top-4 -right-4 bg-coral text-white p-3 rounded-full shadow-soft animate-bounce-gentle">
                  <span className="text-2xl">🔥</span>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-blue opacity-10 rounded-3xl transform rotate-3 scale-105"></div>
            </div>
          </div>

          {/* Price Box */}
          <div className="mt-12 bg-white rounded-2xl shadow-strong p-6 border-4 border-yellow-accent max-w-md mx-auto text-center">
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground line-through">
                De R$ 175,00 (35 livros × R$ 5,00)
              </div>
              <div className="text-4xl font-bold text-coral">
                por apenas R$ 10,00!
              </div>
              <div className="text-lg text-blue-start font-bold">
                ⚡ 35 livros por menos de R$ 0,29 cada!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};