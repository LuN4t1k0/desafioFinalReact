import React, { useContext } from 'react'
import {ApiContext} from '../context/ApiProvider'

const MyPaginator = () => {
  const {nextPage, prevPage} = useContext(ApiContext)
  return (
   <div className='paginator'>
    <button className='btn btn-primary'  onClick={prevPage} >Anteriores</button>
    &nbsp;
    <button className='btn btn-primary' onClick={nextPage} >Siguientes</button>
   </div>
  )
}

export default MyPaginator