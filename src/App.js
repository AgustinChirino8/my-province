import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Artistas from "./components/Pages/Artistas/Artistas";
import Deportes from "./components/Pages/Deporte/Deportes";
import {Inicio} from "./components/Pages/Inicio/Inicio";
import Turismo from "./components/Pages/Turismo/Turismo";
import NavBar from "./components/Nav Bar/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Turismo" element={<Turismo />} />
          <Route path="/Deportes" element={<Deportes />} />
          <Route path="/Artistas" element={<Artistas />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
