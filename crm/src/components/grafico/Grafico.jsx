//Import do charts
import { Chart } from "react-google-charts";

// Inicio do componente function Grafico
function Grafico (props){
  // Dados do Grafico //
  // Dados de quantos meses tem e valor de cada mes 
    const dados = [
        ["Mês", "Valor"],
        ["01", 1000],
        ["02", 1170],
        ["03", 660],
        ["04", 1030],
        ["05", 1900],
        ["06", 100]
      ];

      // Constante 
      const options = {
        legend: props.legenda ? {} : {position: "none"}
      }

      return <div className="card">
      <div className="card-header">
          {props.titulo}
      </div>
      <div className="card-boby text-center">
        <Chart chartType={props.chartType}
            data={dados}
            width="100%"
            height="350px"
            options={options}
            legendToggle={true} />          
      </div>
  </div>

}

// Exportação do componente function Grafico
export default Grafico;