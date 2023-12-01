import React, { useState } from "react";
import "./tarefas.css"; // Importe o arquivo de estilo CSS
import del from "../../assets/gif/excluir.gif"
import edit from "../../assets/gif/salvar.gif"

const Tarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefaEditando, setTarefaEditando] = useState(null);
  const [textoEditado, setTextoEditado] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      // Verifica se a tarefa já existe
      if (!tarefas.some((tarefa) => tarefa.texto === novaTarefa)) {
        setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa }]);
        setNovaTarefa("");
        setMensagemErro("");
      } else {
        setMensagemErro("Esta tarefa já existe!");
      }
    } else {
      setMensagemErro("Digite uma descrição para a tarefa!");
    }
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    cancelarEdicao();
  };

  const editarTarefa = (id) => {
    const tarefaEditavel = tarefas.find((tarefa) => tarefa.id === id);
    setTarefaEditando(tarefaEditavel);
    setTextoEditado(tarefaEditavel.texto);
    setMensagemErro("");
  };

  const salvarEdicao = () => {
    // Verifica se a tarefa editada já existe
    if (
      !tarefas.some(
        (tarefa) => tarefa.texto === textoEditado && tarefa.id !== tarefaEditando.id
      )
    ) {
      setTarefas((prevTarefas) =>
        prevTarefas.map((tarefa) =>
          tarefa.id === tarefaEditando.id
            ? { ...tarefa, texto: textoEditado }
            : tarefa
        )
      );
      cancelarEdicao();
    } else {
      setMensagemErro("Esta tarefa já existe!");
    }
  };

  const cancelarEdicao = () => {
    setTarefaEditando(null);
    setTextoEditado("");
  };

  const excluirTodasTarefas = () => {
    setTarefas([]);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <div>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa} className="AdTarefa">
          Adicionar Tarefa
        </button>
        {mensagemErro && <p style={{ color: "red" }}>{mensagemErro}</p>}
      </div>

      <ul>
        {tarefas.length === 0 ? (
          <p>Sem tarefas no momento.</p>
        ) : (
          tarefas.map((tarefa) => (
            <li key={tarefa.id}>
              {tarefaEditando?.id === tarefa.id ? (
                <>
                  <input
                    type="text"
                    value={textoEditado}
                    onChange={(e) => setTextoEditado(e.target.value)}
                  />
                  <button onClick={salvarEdicao} className="Btnedicoes">
                    Salvar
                  </button>
                  <button onClick={cancelarEdicao} className="Btnedicoes">
                    Cancelar
                  </button>
                </>
              ) : (
                <>
                  {tarefa.texto}
                  <img src="{edit}" alt="" onClick={() => editarTarefa(tarefa.id)} className="imgedicoes"/>
                    
                  <img src="{del}" alt=""  onClick={() => removerTarefa(tarefa.id)} className="imgedicoes"/>
                    
                </>
              )}
            </li>
          ))
        )}
      </ul>

      {tarefas.length > 0 && (
        <button onClick={excluirTodasTarefas} className="Btnedicoes">
          Excluir Todas as Tarefas
        </button>
      )}
    </div>
  );
};

export default Tarefas;

