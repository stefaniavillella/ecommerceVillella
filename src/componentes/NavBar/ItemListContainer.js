import './styles.css'

const ItemListContainer = (titulo) => {
    return (
<div className="container-fluid col-md-4 categoria">
   <div className="row">
       <div className="col-md-8">
        <div className="list-group" id="list-tab" role="tablist">
          <li className="list-group-item disabled categorias">{titulo}</li>
          
        </div>
      </div>
   </div>
</div>
    )
};

export default ItemListContainer;