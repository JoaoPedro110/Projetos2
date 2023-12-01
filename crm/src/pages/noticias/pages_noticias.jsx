import Busca from "../../components/busca/busca";
import Noticias from "../../components/noticias/noticias.jsx";
import Menu from "../../components/menu/menu.jsx"

// Definindo a função Page_noticias como um componente funcional
function Page_noticias() {
    // JSX para o componente Page_noticias
    return (
        <>
            {/* Container fluido para envolver a página */}
            <div className="container-fluid">
                {/* Row flexível sem quebra para estruturar o layout */}
                <div className="row flex-nowrap">
                    {/* Coluna para o menu lateral */}
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                        {/* Renderizando o componente Menu e passando a página atual como propriedade */}
                        <Menu page="noticias" />
                    </div>

                    {/* Coluna principal para o conteúdo da página */}
                    <div className="col py-3 me-3">
                        <div className="mb-5">
                            {/* Renderizando o componente Busca e passando o texto desejado como propriedade */}
                            <Busca texto="Busca por Negócios" />
                        </div>

                        {/* Linha flexível para posicionar elementos horizontalmente com espaço entre eles */}
                        <div className="d-flex justify-content-between mb-3">
                            {/* Bloco para renderizar o componente Noticias */}
                            <div className="">
                                <Noticias />
                            </div>
                        </div>

                        {/* Linha para exibir conteúdo relacionado a notícias */}
                        <div className="row">
                            {/* Conteúdo relacionado a notícias será adicionado aqui */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Exportando o componente Page_noticias como exportação padrão deste módulo
export default Page_noticias;