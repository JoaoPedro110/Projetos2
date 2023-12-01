import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/pages_dashboard.jsx";
import Noticias from "./pages/noticias/pages_noticias.jsx";
import Previsao from "./pages/previsao/pages_previsao.jsx";
import Negocios from "./pages/negocio/pages_negocios.jsx";
import Tarefas from "./pages/tarefas/pages_tarefas.jsx";
import Atividades from "./pages/atividades/pages_atividades.jsx";


// Definindo a função Rotas como um componente funcional
function Rotas() {
    return <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/previsao" element={<Previsao />} />
            <Route path="/negocios" element={<Negocios />} />
            <Route path="/atividades" element={<Atividades />} />
            <Route path="/tarefas" element={<Tarefas />} />
        </Routes>
    </BrowserRouter>
}

// Exportando o componente Rotas como exportação padrão deste módulo
export default Rotas;