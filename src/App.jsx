import { useEffect, useState } from 'react'

import './Index.css'
import MyCardContainer from './components/MyCardContainer'

function App() {
 
  const getData = async () => {
    const URL = "https://dragon-ball-super-api.herokuapp.com/api/characters"
    const response = await fetch(URL)
    const result = await response.json()
    setData(result)
    // console.log(result)
  }

  const [data, setData] = useState([])

  useEffect(() => {
    getData()

  }, [])
  

  return (
    <div className="container">
      <MyCardContainer data={data}/>
    </div>
  )
}

export default App
