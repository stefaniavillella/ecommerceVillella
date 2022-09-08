import Item from "../Item/Item";


const ItemDetail = ({items}) => {
    return (
        <>
            {items.map((producto) => {
                return <Item 
                key={producto.id}
                name={producto.name}
                description={producto.description}
                price={producto.price}
                image={producto.image}
                />;
                
            })}
        </>
    );
};

export default ItemDetail