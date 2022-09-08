import './styles.css'
import { Link } from 'react-router-dom'

const Item = ({id,name, price, image}) => {
    return (
        <div className="col-md-4 mb-3 cards__cardKit">
        <div className="card producto">
        <img className="imagenes" src={image} alt={name} />
            <div className="card-body">
                <h1 className="card-title cards__cardTitle">{name}</h1>
                <p>{price}</p>

                <Link to={`./item/${Item.id}`}>
                <button>Ver detalle</button>
                </Link>
                
            </div>
            </div>
        </div>
    )
}

export default Item
