import './styles.css'
import { Link } from 'react-router-dom'

const Item = ({items}) => {
    return (
        <div className="col-md-4 mb-3 cards__cardKit">
        <div className="cards producto">
        <img className="imagenes" src={items.image} alt={items.name} />
            <div className="card-body">
                <h1 className="card-title cards__cardTitle">{items.name}</h1>
                <p>${items.price}</p>

                <Link to={`./item/${items.id}`}>
                <button className="detalle">Ver detalle</button>
                </Link>
                
            </div>
            </div>
        </div>
    )
}

export default Item
