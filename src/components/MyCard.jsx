import React, { useState } from 'react'

const MyCard = ({name, img}) => {
  // const [info, setInfo] = useState(data)
 console.log(name)
  return (
    <div className="card-1 card-div">
    <div className="gow-img-div img-div">
        <img src={img}/>
    </div>
    <div className="text-container">
        <h2 className="item-name">{name}</h2>
        
        <div className="pricing-and-cart">
            <div className="pricing">
                <p className="rol">Angel</p>
                <p className="previous-price">Vivo</p>
                <p className="planetaOrigen">Planeta Desconocido</p>
                <p className="universo">Universo 8</p>
            </div>
            <i className="fas fa-shopping-cart"></i>
        </div>
    </div>
    </div>
  )
}

export default MyCard