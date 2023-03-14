import "./App.css";
import { Home, NavBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
