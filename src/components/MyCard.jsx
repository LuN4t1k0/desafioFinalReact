import React from 'react'

const MyCard = () => {
  return (
    <div className="card-1 card-div">
    <div className="gow-img-div img-div">
        <img src="https://i.ibb.co/wBwpLqH/Awamo.webp"/>
    </div>
    <div className="text-container">
        <h2 className="item-name">Awamo</h2>
        
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