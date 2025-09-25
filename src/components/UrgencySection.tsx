import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CountdownTimer } from "./CountdownTimer";

export const UrgencySection = () => {
  return (
    <section className="py-16 bg-gradient-coral text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <Badge className="bg-white/20 text-white border-none text-lg py-2 px-4 mb-6">
          🚨 ÚLTIMAS UNIDADES DISPONÍVEIS!
        </Badge>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ⚠️ CRÍTICO: Apenas <span className="text-yellow-accent">17 UNIDADES</span> restantes!
        </h2>
        
        <div className="space-y-4 mb-8">
          <p className="text-xl">Mais de <span className="font-bold">247 pessoas</span> tentando comprar AGORA!</p>
          <p className="text-lg">📈 A cada minuto que passa, menos estoque disponível!</p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <CountdownTimer />
        </div>

        <div className="space-y-6 mb-8">
          <p className="text-xl font-bold">
            ⚡ Depois disso os 35 livros voltam para R$ 175,00!
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-xl line-through opacity-70">De R$ 175,00 (R$ 5,00 por livro)</span>
            </div>
            <div className="text-5xl font-bold mb-2">R$ 10,00</div>
            <div className="text-lg">pagamento único</div>
            <Badge className="bg-yellow-accent text-black font-bold text-lg py-2 px-4 mt-4">
              ⚡ 94% OFF
            </Badge>
          </div>
          
          <p className="text-2xl font-bold">
            🔥 35 LIVROS POR MENOS DE R$ 0,29 CADA!
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-lg font-bold text-yellow-accent">
            ESTOQUE CRÍTICO: Apenas 23 unidades restantes!
          </p>
          <p className="text-base">
            ⚠️ Mais de 150 famílias compraram nas últimas 24 horas
          </p>
        </div>

        <Button
          size="lg"
          className="bg-yellow-accent text-black hover:bg-yellow-accent/90 transform hover:scale-105 transition-all duration-300 text-2xl py-8 px-12 rounded-xl font-bold shadow-strong animate-pulse-soft"
        >
          🔥 GARANTIR AGORA - R$ 10,00! 🔥
        </Button>
        
        <div className="mt-6 space-y-2">
          <p className="text-lg font-bold">⚡ Acesso IMEDIATO aos 35 livros ⚡</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm opacity-90">
            <span>💳 Pagamento 100% seguro</span>
            <span>🔒 SSL Certificado</span>
            <span>⚡ Acesso em 2 minutos</span>
          </div>
        </div>
      </div>
    </section>
  );
};