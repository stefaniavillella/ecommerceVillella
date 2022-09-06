import './styles.css'

const Item = ({name, price, image}) => {
    return (
        <div className="col-md-4 mb-3 cards__cardKit">
        <div className="card producto">
        <img className="imagenes" src={image} alt={name} />
            <div className="card-body">
                <h1 className="card-title cards__cardTitle">{name}</h1>
                <p>{price}</p>
                
            </div>
            </div>
        </div>
    )
}

export default Item
