import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cadastro from "./pages/Cadastro"
import Carrinho from "./pages/Carrinho"
import Login from "./pages/Login"
import Produtos from "./pages/Produtos"
import NavBar from "./components/NavBar"
import "./index.css"

function App(){
  return(
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/produtos" element={<Produtos/> }/>
        <Route path="/carrinho" element={<Carrinho/> }/>
        <Route path="/cadastro" element={<Cadastro/> }/>
        <Route path="/login" element={<Login/> }/>
      </Routes>
    
    </BrowserRouter>
  )
}
export default App