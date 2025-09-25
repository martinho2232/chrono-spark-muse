import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const IncludedSection = () => {
  const includedItems = [
    {
      icon: "📚",
      title: "35 E-books PDF completos para colorir",
      description: "Uma biblioteca inteira em formato digital"
    },
    {
      icon: "🎨",
      title: "Mais de 1.000 ilustrações de histórias bíblicas",
      description: "Do Antigo ao Novo Testamento, todas as histórias principais"
    },
    {
      icon: "📖",
      title: "Versículos bíblicos em cada livro",
      description: "Textos sagrados adaptados para crianças memorizarem facilmente"
    },
    {
      icon: "🎯",
      title: "Atividades extras em cada volume",
      description: "Desenhos para completar, labirintos e jogos educativos"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que está <span className="text-blue-start">incluído</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo que você precisa para uma educação religiosa completa: 35 livros digitais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {includedItems.map((item, index) => (
            <Card key={index} className="shadow-soft hover:shadow-strong transition-shadow border-2 border-transparent hover:border-blue-start/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Price Section */}
        <div className="bg-gradient-blue p-8 rounded-2xl shadow-strong text-white text-center">
          <h3 className="text-3xl font-bold mb-4">💰 Oferta Imperdível!</h3>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-xl line-through opacity-70">R$ 175,00</span>
            <span className="text-sm">por apenas</span>
            <span className="text-5xl font-bold">R$ 10,00</span>
          </div>
          <Button
            size="lg"
            className="bg-yellow-accent text-black hover:bg-yellow-accent/90 transform hover:scale-105 transition-all duration-300 text-xl py-6 px-8 rounded-xl font-bold shadow-strong"
          >
            💳 GARANTIR 35 LIVROS AGORA!
          </Button>
        </div>
      </div>
    </section>
  );
};