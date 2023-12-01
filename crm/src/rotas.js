import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/pages_dashboard.jsx";
import Noticias from "./pages/noticias/pages_noticias.jsx";
import Previsao from "./pages/previsao/pages_previsao.jsx";
import Negocios from "./pages/negocio/pages_negocios.jsx";

function Rotas() {
    return <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/previsao" element={<Previsao />} />
            <Route path="/negocios" element={<Negocios />} />

        </Routes>
    </BrowserRouter>
}

export default Rotas;