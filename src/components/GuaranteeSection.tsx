import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const GuaranteeSection = () => {
  const guaranteeItems = [
    {
      icon: "🛡️",
      title: "Garantia Blindada de 7 Dias",
      description: "Se você não amar o material, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia!"
    },
    {
      icon: "⚡",
      title: "Reembolso Instantâneo",
      description: "Processo automático de reembolso. Clique, solicite e receba de volta em até 24h."
    },
    {
      icon: "⭐",
      title: "Satisfação Garantida",
      description: "Mais de 15.000 pais satisfeitos. Note média de 4.9/5 estrelas em todas as avaliações."
    }
  ];

  const securityFeatures = [
    "Pagamento 100% Seguro - SSL",
    "Acesso Imediato - 2 Minutos", 
    "Suporte 24/7 - WhatsApp"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Garantia Blindada de <span className="text-green-success">7 Dias</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Se você e seu filho não amarem o material, devolvemos 100% do seu dinheiro. Sem perguntas, sem complicações, sem burocracia!
          </p>
          <div className="mt-6">
            <p className="text-lg font-bold text-green-success">
              ✅ Sua compra está 100% protegida e garantida
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {guaranteeItems.map((item, index) => (
            <Card key={index} className="shadow-soft hover:shadow-strong transition-shadow border-t-4 border-t-green-success">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-blue p-8 rounded-2xl shadow-strong text-white text-center mb-8">
          <h3 className="text-2xl font-bold mb-6">
            🛡️ SUA COMPRA ESTÁ 100% PROTEGIDA
          </h3>
          <p className="text-lg mb-8">
            Nós assumimos todo o risco para que você tenha ZERO preocupações
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="font-bold">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-6">
          <p className="text-2xl font-bold text-blue-start">
            🎯 EXPERIMENTE SEM RISCOS POR 7 DIAS COMPLETOS
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se por qualquer motivo você não ficar 100% satisfeito, devolvemos todo o seu dinheiro. É simples assim!
          </p>
          
          <Button
            size="lg"
            className="bg-green-success hover:bg-green-success/90 transform hover:scale-105 transition-all duration-300 text-xl py-6 px-8 rounded-xl font-bold shadow-strong"
          >
            ✅ QUERO TESTAR SEM RISCOS - R$ 10,00
          </Button>
          
          <p className="text-sm text-muted-foreground">
            💡 Dica: Você não tem nada a perder e uma biblioteca completa para ganhar!
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-bold text-coral mb-4">
            ⏰ ATENÇÃO: Esta promoção pode ser encerrada a qualquer momento!
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Não queremos que você perca esta oportunidade única de educar seu filho na fé com 94% de desconto.
          </p>
          <p className="mt-4 text-coral font-bold">
            🔥 247 pessoas visualizaram esta página na última hora
          </p>
        </div>
      </div>
    </section>
  );
};