import styles from "./NavBar.module.scss";
import Historico from "../../assets/Header/Botão - Histórico.png";
import Home from "../../assets/Header/botão - Home.png";
import Pesquisa from "../../assets/Header/Botão - Pesquisa.png";
import Reembolso from "../../assets/Header/Botão - Reembolso.png";
import Sair from "../../assets/Header/Botão - Sair.png";
import Perfil from "../../assets/Header/image.png";
import Fechar from "../../assets/Header/imagem-fechar-header.png";
import { useNavigate } from "react-router-dom";


function NavBar() {
    const navigate = useNavigate();

    return(
        <nav className={styles.navBarEstilo}>
            <button>
                <img src={Fechar} alt="Imagem abrir e fechar" />
            </button>

            <section>
                <img src={Perfil} alt="imagem do perfil" />

                <div className={styles.boxButton}>
                    
                    <button
                        onClick={ () => {
                            navigate("/reembolsos");

                        }}
                    >

                       <img src={Home} alt="Imagem Home" />

                    </button>

                    <button
                        onClick={() => {
                            navigate("/solicitacao");
                        }}
                    >
                        <img src={Reembolso} alt="Imagem Reembolso" />

                    </button>

                    <button
                        onClick={() => {
                            navigate("/reembolsos");
                        }}
                    >
                        <img src={Pesquisa} alt="Imagem Pesquisa" />

                    </button>
                      

                    <button
                        onClick={() => {
                            navigate("/solicitacao");
                        }}
                    >
                        <img src={Historico} alt="Imagem Reembolso" />

                    </button> 

                    <button
                        className={styles.buttonSair}
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        <img src={Sair} alt="Imagem Sair" />

                    </button> 
                    

                </div>
            </section>
        </nav>
    )

}

export default NavBar;