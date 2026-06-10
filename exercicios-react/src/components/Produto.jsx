function Produto(props) {
  return (
    <div>
      <p>Produto: {props.nome}</p>
      <p>Preço: R$ {props.preco}</p>
    </div>
  );
}

export default Produto;