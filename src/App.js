import './App.css';
import NavbarBootstrap from './components/js/NavBarBS';
import "bootstrap/dist/css/bootstrap.min.css";
import Pedido from "./components/js/Pedido";
import Item from './components/js/Item';
import ItemList from './components/js/ItemList';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
//import celularImagem from './images/celular_02.jpg';

function App() {

  
  console.log(`TESTE APP`);



  return (
    <div className="App">
      <header className="App-header">
      <ItemList></ItemList>
       <Pedido stockItens={10} initialValue={1}></Pedido>
        <NavbarBootstrap>
        </NavbarBootstrap>
    </header>

    <BrowserRouter>
    <Routes>
          <Route exact path="/meus-pedidos" element={<Item/>} />
          {/* Add more routes as needed */}
    </Routes>
   </BrowserRouter>

     
    </div>
  );
}

export default App;
