import { BrowserRouter, Routes, Route} from "react-router-dom"
import Registro from './pages/UsuarioRegistro'
import Usuarios from  './pages/ListaUsuarios'
import Historial from './pages/Historial'
import Navbar from "./components/Navbar"
import Grafica from "./pages/grafica"
import HomePage from "./pages/HomePage"




function App(){
  return(
          <BrowserRouter>
          
            <main className="container mx-auto px-10">
            <Navbar/>
                <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/HomePage" element={<HomePage/>}/>
                  <Route path="/Usuarios" element={<Usuarios/>}/>
                  <Route path="/registro" element={<Registro/>}/>
                  <Route path="/ICM/:id" element={<Historial/>}/>
                  <Route path="/grafica/:id" element={<Grafica/>}/>
            </Routes>
            </main>
         
              
        </BrowserRouter>
  );
}

export default App