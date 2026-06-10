import Titulo from "./components/Titulo";
import Paragrafo from "./components/Paragrafo";
import Imagem from "./components/Imagem";
import Botao from "./components/Botao";
import Usuario from "./components/Usuario";
import Produto from "./components/Produto";
import Saudacao from "./components/Saudacao";
import CardSimples from "./components/CardSimples";
import Rodape from "./components/Rodape";
import Status from "./components/Status";

function App() {
  return (
    <div>
      <Titulo texto="Exercícios React" />

      <Paragrafo conteudo="Este é um componente de parágrafo." />

      <Imagem
  src="/imagem.jpg"
  alt="Imagem de exemplo"
/>

      <br />
      <br />

      <Botao label="Clique Aqui" />

      <Usuario nome="Natalia" idade={27} />

      <Produto nome="Notebook" preco={3500} />

      <Saudacao nome="Felipe" />

      <CardSimples
        titulo="Curso React"
        descricao="Aprendendo componentes e props."
      />

      <br />

      <Status mensagem="Sistema funcionando normalmente." />

      <hr />

      <Rodape ano={2026} />
    </div>
  );
}

export default App;