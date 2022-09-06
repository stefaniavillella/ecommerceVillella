import './styles.css'
import data from '../Data/MockData';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({titulo}) => {
  const [items, setItems] = useState([]);

  const getData = new Promise ((resolve, rejet) => {
    setTimeout(() => {
      resolve(data)
    }, 2000);
  })
      useEffect(() => {
        getData.then((result) => {
          setItems(result);
        })
      },);


    return (
<div className="container-fluid col-md-4 categoria">
   <div className="row">
       <div className="col-md-8">
          <li className="list-group-item disabled categorias">{titulo}</li>
        <div className="list-group productoss" id="list-tab" role="tablist">
          <ItemList items={items}/>
        </div>
      </div>
   </div>
</div>
    )
};

export default ItemListContainer;