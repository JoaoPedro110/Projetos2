import Menu from "../../components/menu/menu.jsx";
import Busca from "../../components/busca/busca.jsx";
import Indicador from "../../components/indicador/indicador.jsx";
import Grafico from "../../components/grafico/Grafico.jsx"
import './dashboard.css';

// Inicio do componente function dashboard
function Dashboard() {
    return <>
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    <Menu page="dashboard" />
                </div>

                <div className="col py-3 me-3">
                   <div className="mb-5"> {/*Barra de pesquisa do Negocios */}
                        <Busca texto="Busca por Negócios" />
                    </div>

                    {/* Titulo */}
                    <div className="d-flex justify-content-between">
                        <h1 className="color">Dashboard...</h1> 
                        <button className="btn btn-primary ms-4">Atualizar</button> {/* Botão para atualizar (Não funcional) */}
                    </div>

                    {/* Negocios */}
                    <div className="row">

                        {/* Container dos dados dos Negocios do Mes */}
                        <div className="col-md-3 mt-4">
                            <Indicador titulo="Negócios do Mês"
                                valor="R$19.000,00"
                                rodape="12 atividades" />
                        </div>

                        {/* Container dos dados das atividades para hj */}
                        <div className="col-md-3 mt-4">
                            <Indicador titulo="Atividades para Hoje"
                                valor="6 atividades"
                                rodape="R$3.150,00" />
                        </div>
                        
                        {/* Container dos dados das vendas anuais */}
                        <div className="col-md-12 mt-5">
                            <Grafico titulo="Vendas Anual"
                                chartType="Line" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </>
}
// exportação do componente function dashboard
export default Dashboard;