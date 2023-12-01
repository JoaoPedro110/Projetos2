// Inicio do componente function Indicador
function Indicador(props){
    return <div className="card">
        <div className="card-header">
            {prompt.titulo}
        </div>
        <div className="card-boby text-center">
            <h5 className="card-title">{props.valor}</h5>
            <p className="card-text">{props.rodape}</p>
        </div>
    </div>
} 
// Exportação do componente function Indicador
export default Indicador;