import { HashRouter as Router, Route, Routes } from "react-router-dom";

// pagina's
import Home from "./pages/home.jsx"

//! niet zomaar veranderen

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
