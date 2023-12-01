import Menu from "../../components/menu/menu.jsx";
import Busca from "../../components/busca/busca.jsx";
import Indicador from "../../components/indicador/indicador.jsx";
import Grafico from "../../components/grafico/Grafico.jsx"
import "./pages_dashboard.css"

// Definindo a função Dashboard como um componente funcional
function Dashboard() {
    // JSX para o componente Dashboard
    return (
        <>
            {/* Container fluido para envolver a página */}
            <div className="container-fluid">
                {/* Row flexível sem quebra para estruturar o layout */}
                <div className="row flex-nowrap">
                    {/* Coluna para o menu lateral */}
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                        {/* Renderizando o componente Menu e passando a página atual como propriedade */}
                        <Menu page="dashboard" />
                    </div>

                    {/* Coluna principal para o conteúdo da página */}
                    <div className="col py-3 me-3">
                        <div className="mb-5">
                            {/* Renderizando o componente Busca e passando o texto desejado como propriedade */}
                            <Busca texto="Busca por Negócios" />
                        </div>

                        {/* Linha flexível para posicionar elementos horizontalmente com espaço entre eles */}
                        <div className="d-flex justify-content-between">
                            {/* Título do dashboard */}
                            <h1>Dashboard...</h1>
                            {/* Botão de atualização */}
                            <button className="btn btn-primary ms-4">Atualizar</button>
                        </div>

                        {/* Seção de negócios */}
                        <div className="row">
                            {/* Coluna para o indicador "Negócios do Mês" */}
                            <div className="col-md-3 mt-4">
                                {/* Renderizando o componente Indicador com títulos, valores e rodapé específicos */}
                                <Indicador
                                    titulo="Negócios do Mês"
                                    valor="R$19.000,00"
                                    rodape="12 atividades"
                                />
                            </div>

                            {/* Coluna para o indicador "Atividades para Hoje" */}
                            <div className="col-md-3 mt-4">
                                {/* Renderizando o componente Indicador com títulos, valores e rodapé específicos */}
                                <Indicador
                                    titulo="Atividades para Hoje"
                                    valor="6 atividades"
                                    rodape="R$3.150,00"
                                />
                            </div>

                            {/* Coluna para o gráfico "Vendas Anual" */}
                            <div className="col-md-12 mt-5">
                                {/* Renderizando o componente Grafico com títulos e tipo de gráfico específicos */}
                                <Grafico
                                    titulo="Vendas Anual"
                                    chartType="Line"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Exportando o componente Dashboard como exportação padrão deste módulo
export default Dashboard;