import React from 'react'
import MyCard from './MyCard'

const MyCardContainer = ({data}) => {


  return (
    <div className='container'>
     {data.map(x => <MyCard name={x.name} img ={x.imageUrl} /> )}
       
      
     
      


    </div>
  )
}

export default MyCardContainer