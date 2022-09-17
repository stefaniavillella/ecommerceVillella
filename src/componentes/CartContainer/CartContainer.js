import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export const CartContainer = () => {
    const {productCartList,removeItem,clearItems} = useContext(CartContext);
    return (
        <div>
            Tu carrito!
            <div>
            {productCartList.map(items=>(
                <>
                <p>{items.name} - {items.quantity}</p>
                <button onClick={()=>removeItem(items.id)}>Eliminar</button><br></br>
                </>
            ))}
            <button onClick={()=>clearItems()}>Vaciar Carrito</button>
        </div>
        </div>
    )
}