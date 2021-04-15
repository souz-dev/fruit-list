import { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer} from '../components/Footer'
import { Card } from '../components/Card'
import apiFruit from '../services/api'
import '../styles/pages/Home.modules.css'

function Home() {

  const [loadingFruit, setFruit] = useState([])

    useEffect(() => {
      async function fetchData() {
      const res = await apiFruit.get("")
      setFruit(res.data)
}

    fetchData()
  },[])
 
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="cards"> 

      {loadingFruit.map((item) => (
        <Card key={item.name} name={item.name} img={item.photo}/>
      ))}
      </main>
        <Footer />
    </div>
  )
}

export default Home
