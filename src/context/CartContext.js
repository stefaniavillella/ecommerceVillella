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
            setProductCartList(newArrayCondicion);
        } else{
            //Sino, agrega el producto de cero.
            const newArray = [...productCartList];
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


    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clearItems, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}