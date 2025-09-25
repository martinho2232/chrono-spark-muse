import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import certificateTemplate from "@/assets/certificate-template.jpg";

export const BonusSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-start to-blue-end text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-yellow-accent text-black font-bold text-lg py-2 px-4 mb-4">
            BÔNUS ESPECIAL
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certificado de Pequeno Discípulo
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Um kit completo de certificados personalizados para cada um dos 35 livros! A criança pode acompanhar seu progresso e se sentir realizada a cada conquista, incentivando-a a completar toda a coleção.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left - Features */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-accent">🎯 O que inclui:</h3>
              <div className="space-y-3">
                {[
                  "Certificado personalizado para cada livro completado",
                  "35 certificados únicos de conquista",
                  "Sistema de recompensas por progresso",
                  "Molduras decorativas com símbolos religiosos"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-green-success">✅</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-lg mb-2">Valor: <span className="line-through opacity-70">R$ 89,00</span></div>
                <div className="text-3xl font-bold text-yellow-accent">
                  🎁 GRÁTIS para você!
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Certificate Image */}
          <div className="relative">
            <img
              src={certificateTemplate}
              alt="Certificado de Pequeno Discípulo"
              className="w-full max-w-md mx-auto rounded-2xl shadow-strong"
            />
            <div className="absolute -top-4 -right-4 bg-yellow-accent text-black p-3 rounded-full shadow-soft animate-bounce-gentle">
              <span className="text-xl font-bold">GRÁTIS!</span>
            </div>
          </div>
        </div>

        {/* Total Value */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
          <h3 className="text-2xl font-bold mb-4">
            🎁 Oferta Completa: 35 Livros + 35 Certificados = R$ 264,00
          </h3>
          <div className="text-4xl font-bold mb-6">
            Seu preço hoje: <span className="text-yellow-accent">R$ 10,00!</span>
          </div>
          <Button
            size="lg"
            className="bg-yellow-accent text-black hover:bg-yellow-accent/90 transform hover:scale-105 transition-all duration-300 text-xl py-6 px-8 rounded-xl font-bold shadow-strong"
          >
            🚀 QUERO TUDO POR R$ 10,00!
          </Button>
        </div>
      </div>
    </section>
  );
};