import { HashRouter as Router, Route, Routes } from "react-router-dom";

// pagina's
import Home from "./pages/home.jsx"
import Inschrijven from "./pages/inschrijven.jsx";
import Poules from "./pages/poules.jsx";

//! niet zomaar veranderen

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inschrijven" element={<Inschrijven />} />
        <Route path="/teams" element={<Poules />} />
      </Routes>
    </Router>
  )
}

export default App
