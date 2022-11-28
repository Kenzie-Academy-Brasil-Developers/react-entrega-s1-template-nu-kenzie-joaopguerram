export function Counter({ arrayLancamentos }) {
  if (arrayLancamentos.length == 0) {
    return <div></div>;
  } else {
    return (
      <div>
        <div className="valor-total">
          <h3>Valor total:</h3>
          <p>
            $
            {arrayLancamentos.reduce((a, b) => {
              if (b.tipoLancamento === "Entrada") {
                return a + b.valor;
              } else {
                return a - b.valor;
              }
            }, 0)}
          </p>
        </div>
        <span>O valor se refere ao saldo</span>
      </div>
    );
  }
}
