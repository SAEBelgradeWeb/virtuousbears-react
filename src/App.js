// Components
import Header from "./components/Header"

// Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Header />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<h1>404 page not found</h1>}/>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
