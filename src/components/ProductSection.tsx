import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import coloringBookCover from "@/assets/coloring-book-cover.jpg";

export const ProductSection = () => {
  const features = [
    {
      title: "35 Livros de Colorir com Devocional Infantil",
      description: "35 livros completos para fortalecer a fé católica desde a infância",
      subtitle: "Uma biblioteca inteira de histórias bíblicas adaptadas para crianças"
    },
    {
      title: "Mais de 1.000 páginas para estimular criatividade e concentração",
      description: "Atividades de colorir que desenvolvem habilidades motoras e cognitivas"
    },
    {
      title: "Horas de diversão e conexão em família",
      description: "Tempo de qualidade entre pais e filhos explorando a palavra de Deus"
    },
    {
      title: "Conteúdo educativo com todas as principais histórias da Bíblia",
      description: "Do Gênesis ao Apocalipse, histórias adaptadas para pequenos"
    },
    {
      title: "35 PDFs práticos para imprimir em casa quando quiser",
      description: "Acesso vitalício para imprimir quantas vezes precisar"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-light to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Veja o que seu filho vai <span className="text-coral">receber</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma biblioteca completa com 35 livros digitais cuidadosamente preparados para ensinar a fé de forma divertida
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="relative">
            <img
              src={coloringBookCover}
              alt="35 Livros de Colorir"
              className="w-full max-w-md mx-auto rounded-2xl shadow-strong"
            />
            <div className="absolute -top-4 -left-4 bg-yellow-accent text-black p-2 rounded-lg font-bold text-sm shadow-soft">
              35 LIVROS!
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-l-4 border-l-coral shadow-soft hover:shadow-strong transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">{feature.description}</p>
                  {feature.subtitle && (
                    <p className="text-sm text-blue-start font-medium">{feature.subtitle}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-coral hover:shadow-glow transform hover:scale-105 transition-all duration-300 text-xl py-6 px-8 rounded-xl font-bold shadow-strong"
          >
            🔥 GARANTIR 35 LIVROS - R$ 10,00!
          </Button>
          <p className="mt-4 text-lg text-blue-start font-bold">
            ⚡ Acesso imediato após pagamento
          </p>
        </div>
      </div>
    </section>
  );
};