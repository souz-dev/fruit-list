import { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Card } from '../components/Card'
import apiFruit from '../services/api'

const loadingFruit = async setFruit => {
  const { result } = await apiFruit()

  setFruit(result)
}



function Home() {

  const [loadingFruit, setFruit] = useState([])

  useEffect(() => {
    apiFruit.get().data.loadingFruit(setFruit)
  },[])

  return (
    <>
    <header>
      <Header />
    </header>
    <main>

    {setFruit.map(({name, photo}) => (
    <Card key={name} name={name} img={photo}/>
      ))}
      
    </main>
    </>
  )
}

export default Home