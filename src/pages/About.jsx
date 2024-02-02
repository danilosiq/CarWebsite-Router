import React from "react";
import dan from "../../public/dandan.png";

const About = () => {
  return (
    <div className="About-Container">
      <div className="paragraph">
        <h1>Olá Mundo!</h1>
        <p>
          No vasto universo do desenvolvimento web, mergulhei em uma jornada
          educacional através de um curso na Udemy, que me proporcionou
          habilidades valiosas para criar experiências interativas e dinâmicas
          na web. Uma das principais ferramentas que adquiri é o ReactJS, uma
          biblioteca JavaScript moderna que se tornou uma escolha popular para a
          construção de interfaces de usuário reativas.
        </p>

        <p>
          O fruto desse aprendizado se materializa em um projeto envolvente: um
          site de simulação de venda de carros, onde a complexidade da aplicação
          é modelada por meio da utilização de várias tecnologias e conceitos do
          ecossistema ReactJS.
        </p>

        <p>
          Graças ao curso na Udemy, desenvolvi esse projeto incorporando as
          seguintes habilidades:
        </p>

        <ul>
          <li>
            <strong>React Router (BrowserRouter - Route - Routers):</strong>{" "}
            Implementei uma navegação eficiente no site, possibilitando aos
            usuários explorar diferentes seções sem recarregar a página.
          </li>

          <li>
            <strong>Nested Routes:</strong> Utilizei rotas aninhadas para criar
            uma hierarquia de páginas, melhorando a organização do código e
            proporcionando uma experiência de usuário mais intuitiva.
          </li>

          <li>
            <strong>Rotas Dinâmicas:</strong> Integrei rotas dinâmicas para
            adaptar o conteúdo com base em dados, oferecendo uma experiência
            personalizada aos usuários.
          </li>

          <li>
            <strong>Manipulação de Arquivo JSON:</strong> Utilizei arquivos JSON
            para armazenar e integrar informações sobre os carros, enriquecendo
            a simulação de venda com dados dinâmicos.
          </li>
        </ul>

        <p>
          Essa aplicação não só reflete meu aprendizado em ReactJS, mas também
          cria uma experiência envolvente e personalizada para os usuários.
        </p>
      </div>
      <div className="AboutIMG">
        <img src={dan} alt="" />
      </div>
    </div>
  );
};

export default About;
