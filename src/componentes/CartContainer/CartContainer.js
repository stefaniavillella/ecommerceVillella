import React, { useContext } from "react";
import {CartContext} from "../../context/CartContext"
import { Link } from "react-router-dom";
import Item from "../Item/Item";


export const CartContainer = () => {
    const {productCartList, removeItem, clearItems, getTotal} = useContext(CartContext);
    return (
        <>
            {
        productCartList.length > 0 ?
        <>
            {productCartList.map(items=>(
                <>
                <Item key={items.id} items={items}/>
                <p>{items.name} - {items.quantity} unidades</p>
                <p>Precio total: {items.totalProductos}</p>
                <button onClick={()=>removeItem(items.id)}>Eliminar</button><br></br>
                </>
            ))}
            <button onClick={()=>clearItems()}>Vaciar Carrito</button>
            <p> Precio final de compra: {getTotal()} </p>
        </>
        :
        <>
            <p>¡UPS! El carrito está vacio. Agregá algún producto</p>
                <Link to="/">
                Ir al listado de productos
                </Link>
        </>
}
</>
)
}