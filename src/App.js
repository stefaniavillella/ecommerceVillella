
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
          <ItemListContainer titulo="PRODUCTOS"/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
        </Routes>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
