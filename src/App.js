
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Contador from './componentes/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
        <ItemListContainer titulo="CATEGORIAS"/>
      <Contador/>
    </div>
  );
}

export default App;
