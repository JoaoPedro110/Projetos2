import Busca from "../busca/busca.jsx";
import Menu from "../menu/menu.jsx";

// Componente funcional Negocio
function Negocio() {
    // JSX para o componente Negocio
    return (
        <>
            {/* Container fluido para envolver a página */}
            <div className="container-fluid">
                {/* Row flexível sem quebra para estruturar o layout */}
                <div className="row flex-nowrap">
                    {/* Coluna para o menu lateral */}
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                        {/* Renderizando o componente Menu e passando a página atual como propriedade */}
                        <Menu page="negocio" />
                    </div>

                    {/* Coluna principal para o conteúdo da página */}
                    <div className="col py-3 me-3">
                        <div className="mb-5">
                            {/* Renderizando o componente Busca e passando o texto desejado como propriedade */}
                            <Busca texto="Busca por Negócios" />
                        </div>

                        {/* Bloco de conteúdo principal com fundo branco, bordas arredondadas e espaçamento */}
                        <div className="bg-white p-4 rounded-4 border">
                            {/* Linha flexível para posicionar elementos horizontalmente com espaço entre eles */}
                            <div className="d-flex justify-content-between mb-3">
                                {/* Bloco com título e menu suspenso */}
                                <div className="d-inline-flex">
                                    {/* Título da seção de negócios */}
                                    <h2>Negocios...</h2>

                                    {/* Menu suspenso para seleção de etapa */}
                                    <div className="form-control ms-4">
                                        <select name="etapa" id="etapa">
                                            <option value="0">Etapa</option>
                                            <option value="Prospecção">Prospecção</option>
                                            <option value="Proposta">Proposta</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Botão para adicionar novo negócio */}
                                <button className="btn btn-primary ms-4 ms-2">
                                    {/* Ícone de adição e texto no botão */}
                                    <i className="bi bi-plus-lg me-2"></i>Novo Negócio
                                </button>
                            </div>
                        </div>

                        {/* Linha para exibir conteúdo relacionado a negócios */}
                        <div className="row">
                            {/* Conteúdo relacionado a negócios será adicionado aqui */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Exportando o componente Negocio como exportação padrão deste módulo
export default Negocio;