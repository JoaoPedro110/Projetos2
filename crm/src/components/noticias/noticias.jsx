import React, { useState, useEffect } from "react";
import axios from "axios";


// Definindo a função Noticias como um componente funcional
function Noticias() {
  // Utilizando o hook useState para armazenar o estado das notícias
  const [noticias, setNoticias] = useState([]);
  // Definindo a chave da API e a URL para buscar as notícias
  const apiKey = "4912b933f37241a1a92f9fb421bba28c";
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${apiKey}`;

  // Utilizando o hook useEffect para realizar a busca das notícias assim que o componente é montado
  useEffect(() => {
    // Fazendo uma requisição HTTP usando a biblioteca Axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Atualizando o estado com as notícias obtidas da API
        setNoticias(response.data.articles);
      })
      .catch((error) => {
        // Tratando erros e exibindo mensagens no console em caso de falha na requisição
        console.error("Erro ao buscar notícias:", error);
      });
  }, []); // O array vazio como segundo argumento garante que o useEffect só é executado uma vez, equivalente ao componentDidMount no ciclo de vida de classes

  // Retornando o JSX com a lista de notícias mapeada
  return (
    <>
      {noticias.map((noticia, index) => (
        <li key={index}>
          {/* Criando um link para a notícia que se abre em uma nova aba */}
          <a href={noticia.url} target="_blank" rel="noopener noreferrer">
            {/* Exibindo o título da notícia */}
            {noticia.title}
          </a>
        </li>
      ))}
    </>
  );
}

// Exportando o componente Noticias como exportação padrão deste módulo
export default Noticias;