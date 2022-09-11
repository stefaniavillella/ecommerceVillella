import './styles.css'
import Item from "../Item/Item"


const ItemList = ({items}) => {
    return (
        <>
            {items.map((producto) => {
                return <Item key={producto.id} items={producto}/>
                
            })}
        </>
    );
};

export default ItemList