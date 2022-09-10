


const MyCard = ({name, specie, role, img, status, universe }) => {

 

  return (
    <div className="card-1 card-div">
    <div className="gow-img-div img-div">
        <img src={img}/>
    </div>
    <div className="text-container">
        <h2 className="item-name">{name}</h2>
        
        <div className="pricing-and-cart">
            <div className="pricing">
                <p className="rol">{role}</p>
                <p className="planetaOrigen">{specie}</p>
                <p className="universo"><span>Universo </span>{universe}</p>
                <p className="previous-price">{status}</p>
                
            </div>
            <i className="fas fa-shopping-cart"></i>
        </div>
    </div>
    </div>
  )
}

export default MyCard