import { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Card } from '../components/Card'
import apiFruit from '../services/api'





function Fruta() {
  const [loadingFruit, setFruit] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await apiFruit.get("")
      setFruit(res.data)
    }
  
    fetchData()
  },[])

return (
    <section>
        <div className="card">
            <Card  />

        </div>
    </section>
)
}

export default Fruta