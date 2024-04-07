import './App.css';
import NavbarBootstrap from './components/js/NavBarBS';
import "bootstrap/dist/css/bootstrap.min.css";
import Pedido from "./components/js/Pedido";
import ItemList from "./components/js/ItemList";
import { BrowserRouter , Route, Routes, useLocation  } from 'react-router-dom';

function App() {

  
  console.log(`TESTE APP`);



  return (
      <div className="App">
<BrowserRouter>
          <Routes>
            <Route path="/" element={<InitialPage/>}></Route>
            <Route path="/meus-pedidos" element={<ItemList/>} />
         </Routes> 
         <Navigation/>

      <header className="App-header">
      </header>

  </BrowserRouter> 
      </div> 
 
  );
}

function Navigation() {
  const location = useLocation();

  // Check if the current route is not "/teste"
  if (location.pathname !== "/meus-pedidos") {
    return (
 
      <NavbarBootstrap>
      </NavbarBootstrap>      );
  }
}


function InitialPage() {
  return (
    <div>
      <Pedido stockItens={10} initialValue={1} />
    </div>
  );
}
export default App;
