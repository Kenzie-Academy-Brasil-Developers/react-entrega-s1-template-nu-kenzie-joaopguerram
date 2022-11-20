import { useState } from "react";
import illustration from "../../img/illustration.svg";
import logoKenzie from "../../img/logoKenzie.png";
import "./homePage.css";

export function RenderHome() {
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
  }
}
