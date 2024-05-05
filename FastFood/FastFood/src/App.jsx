import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Menu } from "./Components/Menu";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
