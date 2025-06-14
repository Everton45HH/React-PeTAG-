import '../styles/login.css';
import dog from "../assets/dog.webp" ; 
import logo from "../assets/logo.png" ; 


export default function Login() {
    return (
        <>
        <div className="container">
            <img src={dog} alt="Dog" className="animal_img" />
            <div className="overlay"></div>
            <img src={logo} alt="Logo PeTAG" className="logo" />
            <div className="login">
                <form className="login_box">
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Email" name="email" required />

                    <label htmlFor="senha">Senha:</label>
                    <input type="password" placeholder="Senha" name="senha" required />

                    <p>OU</p>

                    <div style={{ display: 'block' }}>
                        <i className="fa-brands fa-google"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-microsoft"></i>
                    </div>

                    <input type="submit" id="submit-button" value="ENTRAR" />
                </form>
                <p className="cadastro">
                    Não tem uma conta? <a href="/register">Cadastre-se</a>
                </p>
            </div>
        </div>
        </>
    );
}
