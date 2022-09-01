import { useState } from "react";
import './styles.css'
import CicloVida from "../CicloVida/CicloVida";

const Contador = () => {
    const [ contador, setContador ] = useState(0)
    const suma = () => {
        
        setContador( contador + 1)
    }
    const resta = () => {
        setContador( contador - 1)
    }


    return (
        <div className="contador">
        <h1>Cantidad de productos</h1>
        <div className="botones">
        <button className="botonContador" onClick={suma}>Agregar</button>
        <h2>{contador < 6 ? <CicloVida numero={contador}/> : null}</h2>
        <button className="botonContador" onClick={resta}>Quitar</button>
        </div>
        <button className="botonContador">Agregar al carrito</button>
        </div>
    )
}

export default Contador