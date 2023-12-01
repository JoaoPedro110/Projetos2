import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import './menu.css';

// Componente funcional chamado Menu que recebe props como argumento
function Menu(props) {

    // Definindo classes CSS para estilizar os links com base no estado
    const linkBlue = "nav-link align-middle px-0";
    const linkBlack = "nav-link align-middle px-0 link-secondary";

    // Código JSX para o componente
    return (
        <>
            {/* Div principal para o menu */}
            <div className="d-flex flex-collumn align-itens-center align-itens-sm-start px-3 pt-2 text-white min-vh-100">

                {/* Link para a página inicial com o logo */}
                <a href="/" className="d-flex align-itens-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-nome d-sm-inline">
                        {/* Exibindo o logo */}
                        <img src={logo} className="img-logo" />
                    </span>
                </a>

                {/* Lista de links de navegação */}
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-itens-sm-start" id="menu">

                    {/* Link de navegação individual para o Dashboard */}
                    <li className="nav-item">
                        <Link to="/dashboard" className={props.page === "dashboard" ? linkBlue : linkBlack}>
                            <i className="fs-4 bi bi-bar-chart"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                        </Link>
                    </li>

                    {/* Link de navegação individual para Negócios */}
                    <li className="nav-item">
                        <Link to="/negocios" className={props.page === "negocio" ? linkBlue : linkBlack}>
                            <i className="fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Negócios</span>
                        </Link>
                    </li>

                    {/* Link de navegação individual para Notícias */}
                    <li className="nav-item">
                        <Link to="/noticias" className={props.page === "noticias" ? linkBlue : linkBlack}>
                            <i className="fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Notícias</span>
                        </Link>
                    </li>

                    {/* Link de navegação individual para Previsão */}
                    <li className="nav-item">
                        <Link to="/Previsao" className={props.page === "Previsao" ? linkBlue : linkBlack}>
                            <i className="fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Previsão</span>
                        </Link>
                    </li>

                    {/* Link de navegação individual para Previsão */}
                    <li className="nav-item">
                        <Link to="/Tarefas" className={props.page === "Tarefas" ? linkBlue : linkBlack}>
                            <i className="fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Tarefas</span>
                        </Link>
                    </li>

                    {/* Link de navegação individual para Previsão */}
                    <li className="nav-item">
                        <Link to="/Atividades" className={props.page === "Atividades" ? linkBlue : linkBlack}>
                            <i className="fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Atividades</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </>
    );
}

// Exportando o componente Menu como exportação padrão deste módulo
export default Menu;