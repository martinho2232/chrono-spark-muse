export const TrustSection = () => {
  const trustItems = [
    {
      icon: "🛡️",
      title: "100% Seguro",
      subtitle: "SSL Certificado"
    },
    {
      icon: "⭐",
      title: "Qualidade Premium",
      subtitle: "Material aprovado"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "+500 Famílias",
      subtitle: "Satisfeitas"
    },
    {
      icon: "✅",
      title: "Garantia 7 Dias",
      subtitle: "Sem perguntas"
    },
    {
      icon: "⭐",
      title: "Nota 4.9/5",
      subtitle: "Avaliação média"
    },
    {
      icon: "🔐",
      title: "Pagamento Protegido",
      subtitle: "Dados criptografados"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl">{item.icon}</div>
              <div className="font-bold text-sm">{item.title}</div>
              <div className="text-xs text-muted-foreground">{item.subtitle}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-coral font-bold animate-pulse-soft">
            🔥 87 pessoas estão visualizando esta página agora
          </p>
        </div>
      </div>
    </section>
  );
};