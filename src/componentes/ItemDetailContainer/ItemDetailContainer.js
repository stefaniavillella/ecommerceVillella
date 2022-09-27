import './styles.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../../utils/firebase';
import { doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {
    const {productId} = useParams();
    const [items, setItems] = useState({});
  
    
        useEffect(() => {
          const getProducto = async()=>{
            const queryRef = doc(db, "items", productId);
            const response = await getDoc(queryRef);
            const newItem = {
              id: response.id,
              ...response.data(),
            }
            setItems(newItem);
          }
          getProducto();
        },[productId])
  
  
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