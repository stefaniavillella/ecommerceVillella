
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
        <ItemListContainer titulo="PRODUCTOS"/>
    </div>
  );
}

export default App;
