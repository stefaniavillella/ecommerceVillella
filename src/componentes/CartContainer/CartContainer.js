import React, { useContext } from "react";
import {CartContext} from "../../context/CartContext"
import { Link } from "react-router-dom";


export const CartContainer = () => {
    const {productCartList, removeItem, clearItems, getTotal} = useContext(CartContext);
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