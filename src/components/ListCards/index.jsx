import Cards from "./Cards/card";
import React, { useState } from "react";
import { FakeCards } from "./Cards/cardFake";

export function RenderCards({ setArrayLancamentos, arrayLancamentos }) {
  const [filter, setFilter] = useState("Todos");

  const filtered = arrayLancamentos.filter((rec) =>
    filter === "Todos" ? true : rec.tipoLancamento === filter
  );

  return (
    <aside className="container-cards">
      <div className="navbar">
        <h3>Resumo financeiro</h3>

        <div>
          <button
            className="width-100 btn-secondary"
            onClick={() => setFilter("Todos")}
          >
            Todos{" "}
          </button>
          <button
            className="width-100 btn-secondary"
            onClick={() => setFilter("Entrada")}
          >
            Entradas
          </button>
          <button
            className="width-100 btn-secondary"
            onClick={() => setFilter("Despesa")}
          >
            Despesas
          </button>
        </div>
      </div>

      <ul>
        {arrayLancamentos.length === 0 ? (
          <FakeCards />
        ) : (
          filtered.map((transaction, index) => {
            return (
              <Cards
                arrayLancamentos={arrayLancamentos}
                setarrayLancamentos={setArrayLancamentos}
                transacao={transaction}
                key={index}
              />
            );
          })
        )}
      </ul>
    </aside>
  );
}
