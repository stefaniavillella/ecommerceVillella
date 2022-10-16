import React, { useContext, useState } from "react";
import {CartContext} from "../../context/CartContext"
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import './styles.css'


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
        <div className="productoCarrito">
            {
        productCartList.length > 0 ?
        <div className="contenedor">
            {productCartList.map(items=>(
                <div key={items.id} className="cardProductoCarrito">
                <img className="imagenesCart" src={items.image} alt={items.name} />
                <p>{items.name} - {items.quantity} unidades</p>
                <p>Precio total: ${items.totalProductos}</p>
                <button className="botones" onClick={()=>removeItem(items.id)}>Eliminar</button><br></br>
                </div>
            ))}
            <button className="botones" onClick={()=>clearItems()}>Vaciar Carrito</button>
            <div className="precioFinal"><p> Precio final de compra: ${getTotal()} </p></div>
            <form className="form" onSubmit={sendOrder}>
                <label className="labelForm">Nombre:</label> <input className="inputs" type="text"></input>
                <label className="labelForm">Teléfono:</label> <input className="inputs" type="number"></input>
                <label className="labelForm">E-mail:</label> <input className="inputs" type="email"></input><br></br>
                <button className="botones" type="submit">Enviar orden de compra</button>
            </form>
        </div>
        :
        <div className="ups">
            <p>¡UPS! El carrito está vacio. Agregá algún producto</p>
            <div>
                <Link to="/" className="botones">
                Ir al listado de productos
                </Link>
            </div>
        </div>
}
    
        <div>
        {idOrder && <p>Compra realizada con éxito! Tu código es: {idOrder} </p>}
        </div>
</div>
)
}