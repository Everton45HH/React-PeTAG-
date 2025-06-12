// src/pages/Login.jsx
import React from "react";
import logo from "../assets/image-removebg-preview.png"; // ou o caminho correto da imagem

export default function Login() {
  return (
    <>
      <head>
        <title>Login - PeTAG</title>
        <link rel="stylesheet" href="login.css"/>

      </head>
      <header>
        <div id="container-keyframe">
          <span className="div1"></span>
          <span className="div2"></span>
          <span className="div3"></span>
        </div>
        <nav className="nav-bar">
          <img src={logo} alt="Logo PeTAG" className="logo" />
          <div className="nav-list">
            <ul id="ul1">
              <li className="nav-item"><a href="#" className="nav-link">O que é o projeto PeTAG?</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Quem somos nós?</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Contato</a></li>
            </ul>
            <ul id="ul2">
              <li className="nav-item"><a href="#" className="nav-link">ENTRAR</a></li>
              <li className="nav-item"><a href="#" className="nav-link">CADASTRE-SE</a></li>
            </ul>
          </div>
          <div className="menu" onClick={() => console.log("menu clicado")}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <aside>
        <div id="side-content">
          <ul>
            <li className="item-side">item 1</li>
            <li className="item-side">item 2</li>
            <li className="item-side">item 3</li>
            <li className="item-side">item 4</li>
          </ul>
        </div>
      </aside>

      <main>
        <div id="container">
          {/* Conteúdo do login aqui */}
        </div>
      </main>
    </>
  );
}
