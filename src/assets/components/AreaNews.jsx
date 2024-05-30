import CardNew from "./CardNew";

export default function AreaNews() {
  return (
    <main className="flex flex-col items-center bg-dark-60 w-full h-full py-10 px-6 lg:py-20 lg:py-0">
      <CardNew
        date={"30 de maio de 2024"}
        theme={"O que é linguagem de programação? Conheça as principais"}
        news={
          "Uma das vertentes mais populares da tecnologia da informação, a área de programação continua a ter alta demanda de trabalho devido à rápida evolução dos dispositivos tecnológicos."
        }
      />

      <CardNew
        date={"30 de abril de 2024"}
        theme={"Programação em Alta: Cresce a Demanda por Desenvolvedores"}
        news={
          "A rápida evolução tecnológica está impulsionando a demanda por programadores. Com constantes inovações, o mercado de trabalho para desenvolvedores está repleto de oportunidades. Descubra como essa tendência está moldando o futuro da tecnologia."
        }
      />
      
      <CardNew
        date={"30 de março de 2024"}
        theme={"'One Piece' Anuncia Novo Arco: A Batalha Final de Luffy"}
        news={
          "O mangá 'One Piece' revelou um novo arco intitulado 'O Último Tesouro', que será a batalha final de Monkey D. Luffy. Prometendo confrontos épicos e revelações surpreendentes, este arco marcará o clímax das aventuras dos Chapéus de Palha. Fique ligado para mais detalhes sobre este capítulo decisivo!"
        }
      />
    </main>
  );
}
