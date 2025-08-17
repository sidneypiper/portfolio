import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import Imprint from "./pages/Imprint.tsx";
import _404 from "./pages/404.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/imprint" element={<Imprint/>}/>
                <Route path="/impressum" element={<Imprint/>}/>
                <Route path="*" element={<_404/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
