import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


export const CartContainer = () => {
    const {productCartList,removeItem,clearItems,precioFinal} = useContext(CartContext);
    return (
        <div>
            {
        productCartList.length > 0 ?
        <div>
            {productCartList.map(items=>(
                <div>
                <p>{items.name} - {items.quantity} unidades</p>
                <p>Precio total: {items.totalProductos}</p>
                <button onClick={()=>removeItem(items.id)}>Eliminar</button><br></br>
                </div>
            ))}
            <button onClick={()=>clearItems()}>Vaciar Carrito</button>
            <p>Precio Final de Compra: {precioFinal()}</p>
        </div>
        :
        <>
            <p>¡UPS! El carrito está vacio. Agregá algún producto</p>
                <Link to="/">
                Ir al listado de productos
                </Link>
        </>
}
</div>
)
}