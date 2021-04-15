
import { Header } from '../components/HeaderFruit'
import { useState, useEffect } from 'react'
import apiFruit from '../services/api'
import '../styles/pages/Fruta.modules.css'


function Fruta() {
  
  const { name} = useParams()

  const [loadingFruit, setFruit] = useState([])
    useEffect(() => {
      async function fetchData(name) {
      const res = await apiFruit.get("")
        setFruit(res.data)
      }
      fetchData()
    },
[name])

return (
  <section>
    <Header />
    
    {loadingFruit.filter(fruit => fruit.name === name).map(fruit => (
            <div className="card" key={fruit.name}>
              <img src={fruit.photo} alt={fruit.name} loading="lazy"/>
              <div className="content">
                <h2>Calorias: {fruit.calories}</h2>
                <h3>{fruit.name}</h3>
                <p>Proteínas: {fruit.protein}</p>
                <p>Carboidratos: {fruit.carbohydrates}</p>
                <p>Fibras: {fruit.fiber}</p>
                <p>Gordura: {fruit.blubber}</p>
                <p>Porção: {fruit.portion}</p>
              </div>
              </div>
          ))}
    
  </section>
)
}

export default Fruta

