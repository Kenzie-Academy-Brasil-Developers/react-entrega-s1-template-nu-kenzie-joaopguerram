import { useState } from "react";
import illustration from "../../img/illustration.svg";
import logoKenzie from "../../img/logoKenzie.png";
import logoKenzieDark from "../../img/logoKenzieDark.png";
import "./homePage.css";
import { RenderCards } from "../ListCards";
import RenderForm from "../Form";
import { Counter } from "../TotalMoney";

export function RenderHome() {
  const [arrayLancamentos, setArrayLancamentos] = useState([]);
  const [login, setLogin] = useState(true);

  if (login) {
    return (
      <div className="container-home">
        <aside className="aside-info">
          <img src={logoKenzie} alt="" />
          <h2 className="title-1">Centralize o controle das suas finanças</h2>
          <p className="headline">de forma rápida e segura</p>
          <button onClick={() => setLogin(false)} className="btn-primary">
            <p className="headline">Iniciar</p>
          </button>
        </aside>
        <aside>
          <img src={illustration} alt="" />
        </aside>
      </div>
    );
  } else {
    return (
      <div className="container-dash">
        <header className="header-dash">
          <img src={logoKenzieDark} alt="" />
          <button
            onClick={() => setLogin(true)}
            className="btn-secondary title-4"
          >
            Inicio
          </button>
        </header>
        <main>
          <div className="aside-form">
            <div>
              <RenderForm
                setArrayLancamentos={setArrayLancamentos}
                arrayLancamentos={arrayLancamentos}
              />
            </div>
            <div className="div-counter">
              <Counter arrayLancamentos={arrayLancamentos} />
            </div>
          </div>
          <div>
            <RenderCards
              setArrayLancamentos={setArrayLancamentos}
              arrayLancamentos={arrayLancamentos}
            />
          </div>
        </main>
      </div>
    );
  }
}
