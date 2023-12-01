import Menu from "../../components/menu/menu";
import Busca from "../../components/busca/busca";
import Previsao from "../../components/previsao/Previsao";

// Definindo a função Page_Previsao como um componente funcional
function Page_Previsao() {
    // JSX para o componente Page_Previsao
    return (
        <>
            {/* Container fluido para envolver a página */}
            <div className="container-fluid">
                {/* Row flexível sem quebra para estruturar o layout */}
                <div className="row flex-nowrap">
                    {/* Coluna para o menu lateral */}
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                        {/* Renderizando o componente Menu e passando a página atual como propriedade */}
                        <Menu page="previsao" />
                    </div>

                    {/* Coluna principal para o conteúdo da página */}
                    <div className="col py-3 me-3">
                        <div className="mb-5">
                            {/* Renderizando o componente Busca e passando o texto desejado como propriedade */}
                            <Busca texto="Busca por Negócios" />
                        </div>

                        {/* Linha flexível para posicionar elementos horizontalmente com espaço entre eles */}
                        <div className="d-flex justify-content-between mb-3">
                            
                            <div className="">
                                <Previsao />
                            </div>
                        </div>

                        
                        <div className="row">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Exportando o componente Page_Previsao como exportação padrão deste módulo
export default Page_Previsao;