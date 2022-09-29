import React, { useContext, useState } from "react";
import {CartContext} from "../../context/CartContext"
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";


export const CartContainer = () => {
    const {productCartList, removeItem, clearItems, getTotal} = useContext(CartContext);
    const [idOrder, setIdOrder] = useState("")
    

    const sendOrder =(event)=>{
        event.preventDefault();
        console.log("orden enviada", event)
        
        const order = { 
            buyer:{
                name: event.target[0].value,
                phone: event.target[1].value,
                email: event.target[2].value,
            },
            
            items: productCartList, 
            total: getTotal()
        }
        console.log("order", order)
        //creo referencia de ubicación para documento de orden
        const queryRef = collection(db, "orders");
        addDoc(queryRef, order).then(response=>{
            console.log("response", response);
            setIdOrder(response.id)
        });
    }
    


    return (
        <>
            {
        productCartList.length > 0 ?
        <>
            {productCartList.map(items=>(
                <div key={items.id}>
                <img className="imagenes" src={items.image} alt={items.name} />
                <p>{items.name} - {items.quantity} unidades</p>
                <p>Precio total: {items.totalProductos}</p>
                <button onClick={()=>removeItem(items.id)}>Eliminar</button><br></br>
                </div>
            ))}
            <button onClick={()=>clearItems()}>Vaciar Carrito</button>
            <p> Precio final de compra: {getTotal()} </p><br></br>
            <form onSubmit={sendOrder}>
                <label>Nombre:</label> <input type="text"></input>
                <label>Teléfono:</label> <input type="number"></input>
                <label>E-mail:</label> <input type="email"></input><br></br>
                <button type="submit">Enviar orden de compra</button>
            </form>
        </>
        :
        <>
            <p>¡UPS! El carrito está vacio. Agregá algún producto</p>
                <Link to="/">
                Ir al listado de productos
                </Link>
        </>
}
    
        <div>
        {idOrder && <p>Compra realizada con éxito! Tu código es: {idOrder} </p>}
        </div>
</>
)
}