import { useState } from 'react';
import  ItemCount  from '../ItemCount/ItemCount';


const ItemDetail = ({items}) => {
    const [contador, setContador] = useState(0);

    const onAdd = (dato)=>{
        setContador(dato)
    }

    return (
        <div className="detail-container">
            <div className="imagen-detalle">
                <img src={items.image} alt={items.name}/>
                <h4>{items.name}</h4>
                <p>{items.description}</p>
                <h5>{items.price}</h5>
            </div>
            <div>
            <ItemCount stock={10} initial={contador} onAdd={onAdd}/>
            </div>
        </div>
            
    );
};

export default ItemDetail