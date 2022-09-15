import './styles.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../Data/MockData';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const {productId} = useParams();
    const [items, setItems] = useState([]);
  
    const getItem = (id) => {
      return new Promise((resolve, rejet) => {
        const productoDetalle = data.find(items=>items.id === parseInt(id));
        resolve(productoDetalle)
        });
    }
        useEffect(() => {
          const getProducto = async()=>{
            const producto = await getItem(productId);
            setItems(producto)
          }
          getProducto();
        },)
  
  
      return (
  <div className="item-detail-container">
     <div className="contenedor-detalle">
         <p style={{width:"400px", color: "white"}}>Detalle de Producto</p>
            <ItemDetail items={items}/>
           </div>
  </div>
      )
  };
  
  export default ItemDetailContainer;