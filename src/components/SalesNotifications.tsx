import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";

export const SalesNotifications = () => {
  const nomePessoas = [
    'Jose', 'João', 'Antonio', 'Francisco', 'Carlos', 'Paulo', 'Pedro', 'Lucas', 'Luiz', 'Marcos',
    'Luis', 'Gabriel', 'Rafael', 'Daniel', 'Marcelo', 'Bruno', 'Eduardo', 'Felipe', 'Rodrigo', 'Manoel',
    'Mateus', 'Andre', 'Fernando', 'Fabio', 'Leonardo', 'Gustavo', 'Guilherme', 'Leandro', 'Tiago',
    'Anderson', 'Ricardo', 'Marcio', 'Jorge', 'Alexandre', 'Roberto', 'Edson', 'Diego', 'Vitor',
    'Sergio', 'Claudio', 'Matheus', 'Thiago', 'Geraldo', 'Adriano', 'Luciano', 'Julio', 'Renato',
    'Alex', 'Vinicius', 'Rogerio', 'Samuel', 'Ronaldo', 'Mario', 'Flavio', 'Douglas', 'Igor',
    'Maria', 'Ana', 'Francisca', 'Antonia', 'Adriana', 'Juliana', 'Marcia', 'Fernanda', 'Patricia',
    'Aline', 'Sandra', 'Camila', 'Amanda', 'Bruna', 'Jessica', 'Leticia', 'Julia', 'Luciana',
    'Vanessa', 'Mariana', 'Gabriela', 'Vera', 'Vitoria', 'Larissa', 'Claudia', 'Beatriz', 'Rita',
    'Luana', 'Sonia', 'Renata', 'Eliane'
  ];

  const sobrePessoas = [
    'A.', 'B.', 'C.', 'D.', 'E.', 'F.', 'G.', 'H.', 'I.', 'J.', 'K.', 'L.', 'M.', 'N.', 'O.', 
    'P.', 'Q.', 'R.', 'S.', 'T.', 'U.', 'V.', 'W.', 'X.', 'Y.', 'Z.'
  ];

  const materiais = [
    '35 Livros de Colorir Católicos',
    'Coleção Completa - 35 Livros',
    'Kit Educativo Católico',
    '35 Livros + Bônus',
    'Pacote Completo de Livros',
    'Biblioteca Católica Infantil'
  ];

  const cidades = [
    'São Paulo - SP', 'Rio de Janeiro - RJ', 'Belo Horizonte - MG', 'Salvador - BA',
    'Brasília - DF', 'Fortaleza - CE', 'Curitiba - PR', 'Recife - PE', 'Porto Alegre - RS',
    'Manaus - AM', 'Belém - PA', 'Goiânia - GO', 'Guarulhos - SP', 'Campinas - SP',
    'São Luis - MA', 'São Gonçalo - RJ', 'Maceió - AL', 'Duque de Caxias - RJ',
    'Campo Grande - MS', 'Natal - RN', 'Teresina - PI', 'São Bernardo do Campo - SP',
    'Nova Iguaçu - RJ', 'João Pessoa - PB', 'Santo André - SP', 'Osasco - SP'
  ];

  const showNotification = () => {
    const nome = nomePessoas[Math.floor(Math.random() * nomePessoas.length)];
    const sobrenome = sobrePessoas[Math.floor(Math.random() * sobrePessoas.length)];
    const material = materiais[Math.floor(Math.random() * materiais.length)];
    const cidade = cidades[Math.floor(Math.random() * cidades.length)];

    const message = `${nome} ${sobrenome} de ${cidade} acabou de garantir: ${material}`;

    toast({
      title: "🔥 Nova Compra Realizada!",
      description: message,
      duration: 4000,
    });

    // Schedule next notification
    const nextDelay = Math.floor(Math.random() * (20 - 4 + 1) + 4) * 1000;
    setTimeout(showNotification, nextDelay);
  };

  useEffect(() => {
    // Start notifications after 4 seconds
    const initialDelay = setTimeout(showNotification, 4000);
    
    return () => clearTimeout(initialDelay);
  }, []);

  return null; // This component doesn't render anything
};