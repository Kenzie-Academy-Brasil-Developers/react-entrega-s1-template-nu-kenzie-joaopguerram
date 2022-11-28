import React from "react";
import Trash from "../../../img/trash.png";
import "./style.css";

const cards = ({ arrayLancamentos, setArrayLancamentos, transacao }) => {
  function Excluir(objTransacao) {
    const newList = arrayLancamentos.filter(
      (transacao) => transacao.id !== objTransacao.id
    );
    console.log(newList);
    // setArrayLancamentos(
    //   arrayLancamentos.filter((elem) => elem.id !== objTransacao.id)
    // );
  }
  if (transacao.tipoLancamento == "Entrada") {
    return (
      <li className="li-cards">
        <div className="entrada"></div>
        <div className="div-width">
          <div className="content-div">
            <h2>{transacao.descricao}</h2>
            <div className="div-preco">
              <span>R$ {transacao.valor},00</span>
              <button
                onClick={() =>
                  Excluir(arrayLancamentos, setArrayLancamentos, transacao)
                }
              >
                <img src={Trash} alt="Imagem de lixeira"></img>
              </button>
            </div>
          </div>
          <span className="span-tipo">{transacao.tipoLancamento}</span>
        </div>
      </li>
    );
  } else {
    return (
      <li className="li-cards">
        <div className="despesa"></div>
        <div className="div-width">
          <div className="content-div">
            <h2>{transacao.descricao}</h2>
            <div className="div-preco">
              <span>R$ {transacao.valor},00</span>
              <button
                onClick={() =>
                  Excluir(arrayLancamentos, setArrayLancamentos, transacao)
                }
              >
                <img src={Trash} alt="Imagem de lixeira"></img>
              </button>
            </div>
          </div>
          <span className="span-tipo">{transacao.tipoLancamento}</span>
        </div>
      </li>
    );
  }
};

export default cards;
