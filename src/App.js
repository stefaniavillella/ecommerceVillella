
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './componentes/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path="/productos" element={<ItemListContainer/>}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartContainer/>}/>
        </Routes>
        
    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
