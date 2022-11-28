import { useState } from "react";

function RenderForm({ arrayLancamentos, setArrayLancamentos }) {
  const [descricao, setDescricao] = useState("");

  const [valor, setValor] = useState("");

  const [tipoLancamento, setTipoLancamento] = useState("Entrada");

  function submitForm(event) {
    event.preventDefault();

    let objRecord = {
      descricao: descricao,
      valor: valor,
      tipoLancamento: tipoLancamento,
      id: Math.random(),
    };

    setArrayLancamentos([...arrayLancamentos, objRecord]);

    setDescricao(" ");
    setValor(" ");
    setTipoLancamento("Entrada");
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="div-descricao">
          <label htmlFor="descricao" className="title-4">
            Descrição
          </label>
          <input
            id="descricao"
            type="text"
            placeholder="Digite aqui sua descrição"
            onChange={(event) => setDescricao(event.target.value)}
          />
          <p className="body-text">Ex.: Compra de roupas</p>
        </div>
        <div className="div-lanc-valor">
          <div className="div-valor">
            <label htmlFor="valor">Valor</label>
            <input
              id="valor"
              type="number"
              placeholder="R$ 0,00"
              onChange={(event) => setValor(Number(event.target.value))}
            />
          </div>

          <div className="div-lancamento">
            <label htmlFor="tipoLancamento">Tipo de valor</label>
            <select
              id="tipoLancamento"
              value={tipoLancamento}
              onChange={(event) => setTipoLancamento(event.target.value)}
            >
              <option>Selecione o tipo</option>
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn-form btn-primary title-3">
          Inserir valor
        </button>
      </form>
    </div>
  );
}

export default RenderForm;
