import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana P.",
      role: "Mãe do(a) Maria, 5 anos",
      content: "Incrível! 35 livros por esse preço é um presente de Deus. A Maria quer colorir um livro diferente todo dia. Já completamos 8 livros juntas!",
      family: "Família da Ana P.",
      initial: "A"
    },
    {
      name: "Carlos M.",
      role: "Mãe do(a) João, 4 anos",
      content: "Nunca vi meu filho tão interessado nas histórias da Bíblia. Com 35 livros diferentes, ele nunca se cansa. Vale muito mais que o preço!",
      family: "Carlos M.",
      initial: "C"
    },
    {
      name: "Fernanda S.",
      role: "Mãe do(a) Sofia, 6 anos",
      content: "A Sofia já memorizou dezenas de versículos colorindo esses livros. São meses de atividades educativas. Investimento que vale a pena!",
      family: "Fernanda S.",
      initial: "F"
    }
  ];

  return (
    <section className="py-16 bg-gray-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que as <span className="text-coral">famílias</span> dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja como outras famílias católicas estão fortalecendo a fé dos seus filhos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft hover:shadow-strong transition-shadow border-t-4 border-t-coral">
              <CardContent className="p-6">
                <div className="mb-4">
                  <p className="text-muted-foreground italic mb-4">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Avatar className="bg-gradient-blue">
                    <AvatarFallback className="bg-gradient-blue text-white font-bold">
                      {testimonial.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.family}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-lg font-bold">
            <span className="text-coral">💖</span>
            <span>Mais de 500 famílias satisfeitas</span>
          </div>
          <p className="text-xl text-coral font-bold">
            ✅ Junte-se a centenas de famílias!
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Não perca esta oportunidade única de educar seu filho na fé por apenas R$ 10,00
          </p>
          <Button
            size="lg"
            className="bg-gradient-blue hover:shadow-glow transform hover:scale-105 transition-all duration-300 text-xl py-6 px-8 rounded-xl font-bold shadow-strong"
          >
            🙏 EU QUERO FAZER PARTE!
          </Button>
        </div>
      </div>
    </section>
  );
};