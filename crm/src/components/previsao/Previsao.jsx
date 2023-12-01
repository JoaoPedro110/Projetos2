import React, { useState, useEffect } from "react";
import axios from "axios";
import './Previsao.css';


// Definindo a função Previsao como um componente funcional
const Previsao = () => {
    // Utilizando o hook useState para armazenar o estado da previsão do tempo
    const [previsao, setPrevisao] = useState(null);
    // Definindo a chave da API para a previsão do tempo
    const apiKey = "024d7d629689d5e0a1207c49b2db869d"; // Substitua pelo seu próprio chave da API

    // Utilizando o hook useEffect para realizar a busca da previsão do tempo assim que o componente é montado
    useEffect(() => {
        // Substitua a cidade e o país conforme necessário
        const cidade = "votuporanga";
        const pais = "brasil";

        // Construindo a URL da API para obter a previsão do tempo
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${apiKey}`;

        // Fazendo uma requisição HTTP usando a biblioteca Axios
        axios
            .get(apiUrl)
            .then((response) => {
                // Atualizando o estado com os dados da previsão do tempo obtidos da API
                setPrevisao(response.data);
            })
            .catch((error) => {
                // Tratando erros e exibindo mensagens no console em caso de falha na requisição
                console.error("Erro ao buscar previsão do tempo:", error);
            });
    }, []); // O array vazio como segundo argumento garante que o useEffect só é executado uma vez, equivalente ao componentDidMount no ciclo de vida de classes

    // Verificando se a previsão do tempo foi carregada
    if (!previsao) {
        return <div>Carregando...</div>;
    }

    // Convertendo a temperatura para Celsius e arredondando
    const paraCelsius = previsao.main.temp - 273.15;
    const temperaturaArredondada = Math.round(paraCelsius);

    // Mapeando palavras em inglês para suas traduções em português
    const palavrasIngles = ['broken clouds', 'overcast clouds', 'scattered clouds', 'light rain', 'clear sky'];
    const palavrasTraduzidas = ['Nuvens Quebradas', 'Nuvens Nubladas', 'Nuvens Dispersas', 'Chuva Leve', 'Céu Limpo']
    
    // Inicializando a variável resultadoPalavra
    let resultadoPalavra;

    // Iterando sobre as palavras em inglês para encontrar a correspondência e obter a tradução
    for (let i = 0; i < palavrasIngles.length; i++) {
        if (palavrasIngles[i] === previsao.weather[0].description) {
            resultadoPalavra = palavrasTraduzidas[i];
        }
    }

    // Retornando o JSX com as informações da previsão do tempo
    return (
        <div>
            <h2 className="color">Previsão do Tempo</h2>
            <p>Cidade: {previsao.name}</p>
            <p>Temperatura: {temperaturaArredondada} °C</p>
            <p>Condição: {resultadoPalavra}</p>
        </div>
    );
};

// Exportando o componente Previsao como exportação padrão deste módulo
export default Previsao;
