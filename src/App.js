import logo from './logo.svg';
import './App.css';
import NavbarBootstrap from './components/js/NavBarBS';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListenerContainer from "./components/js/ItemListContainer";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavbarBootstrap>
      </NavbarBootstrap>
      <ItemListenerContainer greeting="100" />
      </header>
    
    </div>
  );
}

export default App;
