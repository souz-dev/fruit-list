import '../styles/components/Card.modules.css'
import apiFruit from '../services/api'
import { useState, useEffect } from 'react'

export function CardFruit(fruit){

  const [loadingFruit, setFruit] = useState([])
    useEffect(() => {
      async function fetchData() {
      const res = await apiFruit.get("")
        setFruit(res.data)
      }
      fetchData()
    },
[])

return (
    <>
        {loadingFruit.filter(fruit => fruit.name === name).map(fruit => (
            <div className="card-fruit" key={fruit.name}>
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
    </>
)
}
