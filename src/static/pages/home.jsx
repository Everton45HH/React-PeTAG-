import logo from "../assets/logo.png"; 
import '../styles/home.css' ; 

export default function Home() {
  return (
    <>
      <header>
        <div id="container_keyframe">
          <span className="div1"></span>
          <span className="div2"></span>
          <span className="div3"></span>
        </div>
        <nav className="nav_bar">
          <img src={logo} alt="Logo PeTAG" className="logo" />
          <div className="nav_list">
            <ul id="ul1">
              <li className="nav_item"><a href="#" className="nav_link">O que é o projeto PeTAG?</a></li>
              <li className="nav_item"><a href="#" className="nav_link">Quem somos nós?</a></li>
              <li className="nav_item"><a href="#" className="nav_link">Contato</a></li>
            </ul>
            <ul id="ul2">
              <li className="nav_item"><a href="#" className="nav_link">ENTRAR</a></li>
              <li className="nav_item"><a href="#" className="nav_link">CADASTRE-SE</a></li>
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
        <div id="side_content">
          <ul>
            <li className="item_side">item 1</li>
            <li className="item_side">item 2</li>
            <li className="item_side">item 3</li>
            <li className="item_side">item 4</li>
          </ul>
        </div>
      </aside>

      <main>
        <div id="container">
        </div>
      </main>
    </>
  );
}
