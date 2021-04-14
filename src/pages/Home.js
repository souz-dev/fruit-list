import { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Card } from '../components/Card'
import apiFruit from '../services/api'

function Home() {

  const [loadingFruit, setFruit] = useState([])

  useEffect(() => {
    const res = apiFruit.get("")
    setFruit(res.data)

    console.log(res)
  },[])
 
  return (
    <>
      <header>
        <Header />
      </header>
      <main>

      {loadingFruit.map(item => (
        <Card key={item.name} name={item.name} img={item.photo}/>
      ))}
      </main>
    </>
  )
}

export default Home