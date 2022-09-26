import './styles.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {db} from "../../utils/firebase";
import { collection, getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = ({titulo}) => {
  const {categoryId} = useParams();
  const [items, setItems] = useState([]);

  
      useEffect(() => {
        //referencia
       if(!categoryId){
        const queryRef = collection(db, "items");
        getDocs(queryRef).then(response=>{
          const documentos = response.docs.map(doc=>{
            const newItem = {
              id: doc.id,
                  ...doc.data(),
            }
            return newItem
          });
          setItems(documentos);
        })
       } else {
        const queryRef = query(collection(db, "items"), where("category", "==", categoryId));
        getDocs(queryRef).then(response=>{
          const documentos = response.docs.map(doc=>{
            const newItem = {
              id: doc.id,
                  ...doc.data(),
            }
            return newItem
          });
          setItems(documentos);
       })
      }

      },[categoryId])


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