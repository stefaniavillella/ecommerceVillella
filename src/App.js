
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/NavBar/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
