export const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold">Minha Primeira Bíblia para Colorir</h3>
          <p className="text-lg opacity-90">
            Fortalecendo a fé católica das crianças através da arte e criatividade
          </p>
          
          <div className="space-y-4">
            <p className="text-coral">contato@minhaprimeirabiblia.com.br</p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-70">
              <a href="#" className="hover:text-coral transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-coral transition-colors">Termos de Uso</a>
              <span>Pagamento 100% Seguro</span>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-6 space-y-2">
            <p className="text-sm opacity-70">
              Feito com amor para famílias católicas
            </p>
            <p className="text-sm opacity-70">
              © 2024 Minha Primeira Bíblia para Colorir. Todos os direitos reservados.
            </p>
            <p className="text-xs opacity-50 max-w-2xl mx-auto">
              Este produto não é afiliado oficialmente à Igreja Católica, mas foi criado com respeito e devoção aos ensinamentos cristãos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};