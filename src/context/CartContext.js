import React from 'react';
import { useState } from 'react';


export const CartContext = React.createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);

    const addItem = (item, quantity)=>{
        console.log("item", item, "quantity", quantity)
        const newProduct ={
            ...item,
            quantity
        }
        console.log ("Nuevo", newProduct)

        //condicional para que si el producto existe en el cart, sume cantidad.
        if(isInCart(item.id)){
            const condicion = productCartList.findIndex(items=> items.id === item.id)
            const newArrayCondicion = [...productCartList];
            newArrayCondicion[condicion].quantity = newArrayCondicion[condicion].quantity + quantity;
            newArrayCondicion[condicion].totalProductos = newArrayCondicion[condicion].quantity * newArrayCondicion[condicion].price;
            setProductCartList(newArrayCondicion);
        } else{
            //Sino, agrega el producto de cero.
            const newArray = [...productCartList];
            newProduct.totalProductos = newProduct.quantity *  newProduct.price;
            newArray.push(newProduct);
            setProductCartList(newArray);

        }

    }

    const removeItem = (itemId)=>{
        console.log("itemId", itemId)
        const arrayRemove = productCartList.filter(producto=> producto.id !== itemId);
        setProductCartList(arrayRemove);
    }

    const clearItems = ()=>{
        setProductCartList([])
    }

    const isInCart = (productoId)=>{
        const existe = productCartList.some(items=> items.id === productoId);
        return existe;
    }

    const getTotal = () => {
        const precioFinal = productCartList.reduce((acc, items) => acc + items.totalProductos, 0);
        return precioFinal;
    }

    const getTotalProducts = ()=>{
        const totalProducts = productCartList.reduce((acc, item)=>acc + item.quantity,0);
        return totalProducts;
    }


    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clearItems, isInCart, getTotal, getTotalProducts}}>
            {children}
        </CartContext.Provider>
    )
}