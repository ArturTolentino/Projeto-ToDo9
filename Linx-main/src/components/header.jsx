import React, { useState } from "react";

function Header() {
  const [input, setInput] = useState({});

  return (
    <div className="main">
      <div className="center">
        <div className="menu">
          <div className="logo"></div>
          <div className="organiz">
            <div className="item-menu">
              <a href="#">Produtos</a>
            </div>
            <div className="item-menu">
              <a href="#">Compartilhe</a>
            </div>
            <div className="item-menu">
              <a href="#">Entrar</a>
            </div>
          </div>
        </div>

        <div className="form">
          <form>
            <div className="textT"></div>
            <div className="items-form">
              <h2> Entre em contato!</h2>
              <input placeholder="Nome completo" type="text" />
              <input
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite seu e-mail"
                type="email"
                name=""
                id=""
              />
              <input placeholder="Digite seu CPF" type="number" />
              <div className="caixaS">
                <input type="radio" name="radio" />
                <label htmlFor="">Masculino</label>
                <input type="radio" name="radio" />
                <label htmlFor="radio">Feminino</label>
              </div>
              <input type="submit" placeholder="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Header;
