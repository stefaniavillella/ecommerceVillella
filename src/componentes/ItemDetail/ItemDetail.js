


const ItemDetail = ({items}) => {
    return (
        <div className="detail-container">
            <div className="imagen-detalle">
                <img src={items.image} alt={items.name}/>
            </div>
            <div>
                <h4>{items.name}</h4>
                <p>{items.description}</p>
                <h5>{items.price}</h5>
            </div>
        </div>
            
    );
};

export default ItemDetail