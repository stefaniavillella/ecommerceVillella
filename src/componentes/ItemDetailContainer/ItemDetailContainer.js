import data from '../Data/MockData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const {productId} = useParams();
    const [items, setItems] = useState([]);
  
    const getItem = new Promise ((resolve, rejet) => {
        setTimeout(() => {
            const detalle = data.find(item=>item.id === parseInt(productId));
          resolve(detalle)
        }, 2000);
    })
        useEffect(() => {
          getItem.then((result) => {
            setItems(result);
          })
        },);
  
  
      return (
  <div className="container-fluid col-md-4 categoria">
     <div className="row">
         <div className="col-md-8">
          <div className="list-group productoss" id="list-tab" role="tablist">
            <ItemDetail items={items}/>
          </div>
        </div>
     </div>
  </div>
      )
  };
  
  export default ItemDetailContainer;